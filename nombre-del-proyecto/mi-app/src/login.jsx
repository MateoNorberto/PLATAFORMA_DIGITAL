import React, { useState, useEffect } from 'react';

const styles = {
  body: {
    height: '100vh',
    background: "url('https://images.unsplash.com/photo-1480497490787-505ec076689f') no-repeat center center/cover",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    display: 'flex',
    background: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    width: '900px',
    height: '500px',
  },
  left: {
    flex: 1,
    padding: '50px',
  },
  leftH1: {
    fontSize: '50px',
    fontWeight: 'bold',
    marginBottom: '20px',
    whiteSpace: 'pre-line', // to keep the line break from original "Bienvenido\n de nuevo"
  },
  leftP: {
    fontSize: '14px',
    lineHeight: 1.5,
    marginBottom: '20px',
  },
  socialIcons: {
    display: 'flex',
  },
  socialImg: {
    width: '30px',
    marginRight: '10px',
    filter: 'brightness(0) invert(1)',
  },
  right: {
    flex: 1,
    padding: '50px',
  },
  rightH2: {
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '14px',
    margin: '5px 0',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    border: 'none',
    outline: 'none',
  },
  remember: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  },
  rememberLabel: {
    marginLeft: '5px',
  },
  button: {
    background: 'orange',
    border: 'none',
    padding: '10px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  lost: {
    display: 'block',
    marginTop: '10px',
    color: 'white',
    fontSize: '12px',
    textDecoration: 'none',
  },
  terms: {
    marginTop: '20px',
    fontSize: '12px',
  },
  termsLink: {
    color: 'white',
    textDecoration: 'underline',
  },
};

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, contraseña: password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error en el login');
      }

      console.log(data);
      alert(data.mensaje); // Opcional

      // Guardar rol en localStorage para persistencia (opcional, pero útil para recargas)
      localStorage.setItem('userRole', data.rol);

      // Llamar a onLogin con el rol
      onLogin(data.rol);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.left}>
          <h1 style={styles.leftH1}>Bienvenido{'\n'}de nuevo</h1>
          <p style={styles.leftP}>
            Es un hecho establecido que un lector se distraerá con el contenido legible de una página cuando examine su diseño. El propósito de usarlo
          </p>
          <div style={styles.socialIcons}>
            <a href="#"><img style={styles.socialImg} src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" /></a>
            <a href="#"><img style={styles.socialImg} src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" /></a>
            <a href="#"><img style={styles.socialImg} src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" /></a>
            <a href="#"><img style={styles.socialImg} src="https://cdn-icons-png.flaticon.com/512/733/733646.png" alt="YouTube" /></a>
          </div>
        </div>
        <div style={styles.right}>
          <h2 style={styles.rightH2}>Iniciar sesión</h2>
          <form style={styles.form} onSubmit={handleSubmit}>
            <label style={styles.label} htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="Ingresa tu correo"
              required
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label style={styles.label} htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              required
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div style={styles.remember}>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" style={styles.rememberLabel}>Recordarme</label>
            </div>
            <button type="submit" style={styles.button} disabled={loading}>
              {loading ? 'Cargando...' : 'Iniciar sesión ahora'}
            </button>
            <a href="#" style={styles.lost}>¿Olvidaste tu contraseña?</a>
          </form>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          <p style={styles.terms}>
            Al hacer clic en "Iniciar sesión ahora" aceptas<br />
            <a href="#" style={styles.termsLink}>Términos de servicio</a> | <a href="#" style={styles.termsLink}>Política de privacidad</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;