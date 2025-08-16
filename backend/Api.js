// Api.js
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;
const MONGO_URI = 'mongodb+srv://liamleonorberto:0kGuV70E9Yw4M793@proyect1.dutz7ps.mongodb.net/?retryWrites=true&w=majority&appName=proyect1';

// ======= CONEXIÓN A MONGODB =========
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Error conectando a MongoDB:', err));

// ======= MODELOS =========

// USUARIO
const userSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  email: { type: String, unique: true, required: true },
  contraseña: { type: String, required: true },
  rol: { type: String, enum: ['admin', 'docente', 'estudiante'], required: true },
  fecha_creacion: { type: Date, default: Date.now },
  estado: { type: String, enum: ['activo', 'inactivo'], default: 'activo' },
});

// Hash antes de guardar contraseña
userSchema.pre('save', async function(next) {
  if (!this.isModified('contraseña')) return next();
  const salt = await bcrypt.genSalt(10);
  this.contraseña = await bcrypt.hash(this.contraseña, salt);
  next();
});

// Método para comparar contraseña
userSchema.methods.compararContraseña = function(password) {
  return bcrypt.compare(password, this.contraseña);
};

const User = mongoose.model('User', userSchema);

// CURSOS
const cursoSchema = new mongoose.Schema({
  nombre_curso: { type: String, required: true },
  descripcion: String,
  fecha_inicio: Date,
  fecha_fin: Date,
  estado: { type: String, enum: ['activo', 'cerrado'], default: 'activo' },
  profesor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});
const Curso = mongoose.model('Curso', cursoSchema);

// MATERIALES
const materialSchema = new mongoose.Schema({
  curso_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso', required: true },
  titulo: String,
  descripcion: String,
  tipo: { type: String, enum: ['pdf', 'video', 'enlace', 'otro'], default: 'otro' },
  url: String, // o ruta archivo
  fecha_subida: { type: Date, default: Date.now },
});
const Material = mongoose.model('Material', materialSchema);

// TAREAS Y EXÁMENES
const actividadSchema = new mongoose.Schema({
  curso_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso', required: true },
  titulo: String,
  descripcion: String,
  fecha_entrega: Date,
  tipo: { type: String, enum: ['tarea', 'examen'], required: true },
  puntos: Number,
});
const Actividad = mongoose.model('Actividad', actividadSchema);

// CALIFICACIONES
const calificacionSchema = new mongoose.Schema({
  actividad_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Actividad', required: true },
  estudiante_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  nota: Number,
  fecha_calificacion: { type: Date, default: Date.now },
  comentarios: String,
});
const Calificacion = mongoose.model('Calificacion', calificacionSchema);

// MENSAJES Y FOROS
const mensajeSchema = new mongoose.Schema({
  curso_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso', required: true },
  usuario_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  contenido: String,
  fecha_envio: { type: Date, default: Date.now },
});
const Mensaje = mongoose.model('Mensaje', mensajeSchema);

// INSCRIPCIONES
const inscripcionSchema = new mongoose.Schema({
  estudiante_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  curso_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso', required: true },
  fecha_inscripcion: { type: Date, default: Date.now },
  estado: { type: String, enum: ['activo', 'retirado'], default: 'activo' },
});
const Inscripcion = mongoose.model('Inscripcion', inscripcionSchema);

// ENTREGAS
const entregaSchema = new mongoose.Schema({
  actividad_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Actividad', required: true },
  estudiante_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  archivo_entregado: String, // URL o nombre archivo
  respuesta: String,
  fecha_entrega: { type: Date, default: Date.now },
  estado: { type: String, enum: ['entregado', 'pendiente', 'retrasado'], default: 'pendiente' },
});
const Entrega = mongoose.model('Entrega', entregaSchema);

// PROGRESO
const progresoSchema = new mongoose.Schema({
  estudiante_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  curso_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso', required: true },
  avance_porcentaje: { type: Number, default: 0 },
  fecha_ultimo_acceso: { type: Date, default: Date.now },
});
const Progreso = mongoose.model('Progreso', progresoSchema);

// ======= RUTAS =======

// --- Usuarios ---
// Crear usuario con rol según dominio
app.post('/usuarios', async (req, res) => {
  try {
    const { nombre, apellido, email, contraseña } = req.body;

    let rol = '';
    if (email.endsWith('@admin.com')) rol = 'admin';
    else if (email.endsWith('@slgdocente.com')) rol = 'docente';
    else if (email.endsWith('@slgaalumno.com')) rol = 'estudiante';
    else return res.status(400).json({ error: 'Dominio de correo no válido' });

    const existe = await User.findOne({ email });
    if (existe) return res.status(400).json({ error: 'Usuario ya existe' });

    const user = new User({ nombre, apellido, email, contraseña, rol });
    await user.save();

    res.json({ mensaje: `Usuario ${rol} creado`, usuario: { nombre, apellido, email, rol } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
});

// Login
app.post('/login', async (req, res) => {
  try {
    const { email, contraseña } = req.body;
    const usuario = await User.findOne({ email });
    if (!usuario) return res.status(400).json({ error: 'Usuario no encontrado' });

    const valido = await usuario.compararContraseña(contraseña);
    if (!valido) return res.status(400).json({ error: 'Contraseña incorrecta' });

    // Dashboard según rol
    let dashboard = '';
    if (usuario.rol === 'admin') dashboard = 'Dashboard Administrativo';
    else if (usuario.rol === 'docente') dashboard = 'Dashboard Docente';
    else if (usuario.rol === 'estudiante') dashboard = 'Dashboard Estudiante';

    res.json({ mensaje: `Bienvenido ${usuario.nombre}`, dashboard, rol: usuario.rol });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error en login' });
  }
});

// --- Cursos ---
app.post('/cursos', async (req, res) => {
  try {
    const { nombre_curso, descripcion, fecha_inicio, fecha_fin, profesor_id } = req.body;

    const profesor = await User.findById(profesor_id);
    if (!profesor || profesor.rol !== 'docente') return res.status(400).json({ error: 'Profesor no válido' });

    const curso = new Curso({ nombre_curso, descripcion, fecha_inicio, fecha_fin, profesor_id });
    await curso.save();

    res.json({ mensaje: 'Curso creado', curso });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear curso' });
  }
});

app.get('/cursos', async (req, res) => {
  try {
    const cursos = await Curso.find().populate('profesor_id', 'nombre apellido email');
    res.json(cursos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al listar cursos' });
  }
});

// --- Materiales ---
app.post('/materiales', async (req, res) => {
  try {
    const { curso_id, titulo, descripcion, tipo, url } = req.body;

    const curso = await Curso.findById(curso_id);
    if (!curso) return res.status(400).json({ error: 'Curso no válido' });

    const material = new Material({ curso_id, titulo, descripcion, tipo, url });
    await material.save();

    res.json({ mensaje: 'Material creado', material });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear material' });
  }
});

app.get('/materiales/:curso_id', async (req, res) => {
  try {
    const { curso_id } = req.params;
    const materiales = await Material.find({ curso_id });
    res.json(materiales);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al listar materiales' });
  }
});

// --- Actividades (Tareas y Exámenes) ---
app.post('/actividades', async (req, res) => {
  try {
    const { curso_id, titulo, descripcion, fecha_entrega, tipo, puntos } = req.body;

    const curso = await Curso.findById(curso_id);
    if (!curso) return res.status(400).json({ error: 'Curso no válido' });

    if (!['tarea', 'examen'].includes(tipo)) return res.status(400).json({ error: 'Tipo inválido' });

    const actividad = new Actividad({ curso_id, titulo, descripcion, fecha_entrega, tipo, puntos });
    await actividad.save();

    res.json({ mensaje: 'Actividad creada', actividad });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear actividad' });
  }
});

app.get('/actividades/:curso_id', async (req, res) => {
  try {
    const { curso_id } = req.params;
    const actividades = await Actividad.find({ curso_id });
    res.json(actividades);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al listar actividades' });
  }
});

// --- Calificaciones ---
app.post('/calificaciones', async (req, res) => {
  try {
    const { actividad_id, estudiante_id, nota, comentarios } = req.body;

    const actividad = await Actividad.findById(actividad_id);
    const estudiante = await User.findById(estudiante_id);
    if (!actividad || !estudiante) return res.status(400).json({ error: 'Actividad o estudiante no válido' });

    const calificacion = new Calificacion({ actividad_id, estudiante_id, nota, comentarios });
    await calificacion.save();

    res.json({ mensaje: 'Calificación creada', calificacion });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear calificación' });
  }
});

app.get('/calificaciones/:actividad_id', async (req, res) => {
  try {
    const { actividad_id } = req.params;
    const calificaciones = await Calificacion.find({ actividad_id }).populate('estudiante_id', 'nombre apellido email');
    res.json(calificaciones);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al listar calificaciones' });
  }
});

// --- Mensajes ---
app.post('/mensajes', async (req, res) => {
  try {
    const { curso_id, usuario_id, contenido } = req.body;

    const curso = await Curso.findById(curso_id);
    const usuario = await User.findById(usuario_id);
    if (!curso || !usuario) return res.status(400).json({ error: 'Curso o usuario no válido' });

    const mensaje = new Mensaje({ curso_id, usuario_id, contenido });
    await mensaje.save();

    res.json({ mensaje: 'Mensaje enviado', data: mensaje });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al enviar mensaje' });
  }
});

app.get('/mensajes/:curso_id', async (req, res) => {
  try {
    const { curso_id } = req.params;
    const mensajes = await Mensaje.find({ curso_id }).populate('usuario_id', 'nombre apellido rol');
    res.json(mensajes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al listar mensajes' });
  }
});

// --- Inscripciones ---
app.post('/inscripciones', async (req, res) => {
  try {
    const { estudiante_id, curso_id } = req.body;

    const estudiante = await User.findById(estudiante_id);
    const curso = await Curso.findById(curso_id);

    if (!estudiante || estudiante.rol !== 'estudiante') return res.status(400).json({ error: 'Estudiante no válido' });
    if (!curso) return res.status(400).json({ error: 'Curso no válido' });

    // Verificar si ya inscrito
    const yaInscripto = await Inscripcion.findOne({ estudiante_id, curso_id, estado: 'activo' });
    if (yaInscripto) return res.status(400).json({ error: 'Ya inscrito en este curso' });

    const inscripcion = new Inscripcion({ estudiante_id, curso_id });
    await inscripcion.save();

    res.json({ mensaje: 'Inscripción creada', inscripcion });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al inscribir' });
  }
});

app.get('/inscripciones/:estudiante_id', async (req, res) => {
  try {
    const { estudiante_id } = req.params;
    const inscripciones = await Inscripcion.find({ estudiante_id, estado: 'activo' }).populate('curso_id');
    res.json(inscripciones);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al listar inscripciones' });
  }
});

// --- Entregas ---
app.post('/entregas', async (req, res) => {
  try {
    const { actividad_id, estudiante_id, archivo_entregado, respuesta, estado } = req.body;

    const actividad = await Actividad.findById(actividad_id);
    const estudiante = await User.findById(estudiante_id);
    if (!actividad || !estudiante) return res.status(400).json({ error: 'Actividad o estudiante no válido' });

    const entrega = new Entrega({ actividad_id, estudiante_id, archivo_entregado, respuesta, estado });
    await entrega.save();

    res.json({ mensaje: 'Entrega creada', entrega });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear entrega' });
  }
});

app.get('/entregas/:actividad_id/:estudiante_id', async (req, res) => {
  try {
    const { actividad_id, estudiante_id } = req.params;
    const entrega = await Entrega.findOne({ actividad_id, estudiante_id });
    res.json(entrega);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener entrega' });
  }
});

// --- Progreso ---
app.post('/progreso', async (req, res) => {
  try {
    const { estudiante_id, curso_id, avance_porcentaje } = req.body;

    let progreso = await Progreso.findOne({ estudiante_id, curso_id });
    if (progreso) {
      progreso.avance_porcentaje = avance_porcentaje;
      progreso.fecha_ultimo_acceso = new Date();
      await progreso.save();
    } else {
      progreso = new Progreso({ estudiante_id, curso_id, avance_porcentaje });
      await progreso.save();
    }

    res.json({ mensaje: 'Progreso actualizado', progreso });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar progreso' });
  }
});

app.get('/progreso/:estudiante_id/:curso_id', async (req, res) => {
  try {
    const { estudiante_id, curso_id } = req.params;
    const progreso = await Progreso.findOne({ estudiante_id, curso_id });
    res.json(progreso);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener progreso' });
  }
});

// ======= INICIAR SERVIDOR =======
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
