import React from 'react';

const Perfil = () => {
  return (
    <div style={{ 
      fontFamily: "Arial, sans-serif", 
      width: "100%", 
      minHeight: "100vh", 
      padding: 20, 
      backgroundColor: "#f9f9f9",
      boxSizing: "border-box"
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <div style={{
          width: 120,
          height: 120,
          borderRadius: "50%",
          overflow: "hidden",
          margin: "auto",
          border: "3px solid white",
          boxShadow: "0 0 5px rgba(0,0,0,0.2)",
          marginBottom: 15,
        }}>
          <img
            src="/mnt/data/5f9151ff-5b56-4b15-bca3-1290c483595e.png"
            alt="Foto de perfil"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <h2 style={{ fontWeight: "normal", marginBottom: 5 }}>name student</h2>
        <p style={{ fontWeight: "bold", margin: 0 }}>@gmail.com</p>
      </div>

      {/* Main Content: Two Columns */}
      <div style={{ display: "flex", gap: 30 }}>
        {/* Izquierda: Información básica, adicional, contacto, laboral */}
        <div style={{ flex: 1 }}>
          {/* Información básica */}
          <section style={{ background: "white", border: "1px solid #ccc", padding: 20, marginBottom: 30 }}>
            <h3>Información básica</h3>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td style={{ fontWeight: "bold", padding: "10px 5px", borderBottom: "1px solid #ddd" }}>Nombre completo</td>
                  <td style={{ padding: "10px 5px", borderBottom: "1px solid #ddd", textAlign: "right", color: "#1a73e8", cursor: "pointer" }}>
                    name
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold", padding: "10px 5px", borderBottom: "1px solid #ddd" }}>Dirección de correo electrónico</td>
                  <td style={{ padding: "10px 5px", borderBottom: "1px solid #ddd", textAlign: "right" }}>@gmail.com</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold", padding: "10px 5px", borderBottom: "1px solid #ddd" }}>ID de estudiante</td>
                  <td style={{ padding: "10px 5px", borderBottom: "1px solid #ddd", textAlign: "right" }}>0000000000</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold", padding: "10px 5px" }}>Contraseña</td>
                  <td style={{ padding: "10px 5px", textAlign: "right" }}>
                    <a href="#" style={{ color: "#1a73e8", textDecoration: "none" }}>Cambiar contraseña</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Información adicional */}
          <section style={{ background: "white", border: "1px solid #ccc", padding: 20, marginBottom: 30 }}>
            <h3>Información adicional</h3>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td style={{ fontWeight: "bold", padding: "10px 5px", borderBottom: "1px solid #ddd" }}>Sexo</td>
                  <td style={{ padding: "10px 5px", borderBottom: "1px solid #ddd" }}>Agregar género</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold", padding: "10px 5px", borderBottom: "1px solid #ddd" }}>Nombre adicional</td>
                  <td style={{ padding: "10px 5px", borderBottom: "1px solid #ddd" }}>Agregar nombre adicional</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold", padding: "10px 5px", borderBottom: "1px solid #ddd" }}>Fecha de nacimiento</td>
                  <td style={{ padding: "10px 5px", borderBottom: "1px solid #ddd" }}>Agregar fecha de nacimiento</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold", padding: "10px 5px", borderBottom: "1px solid #ddd" }}>Nivel de educación</td>
                  <td style={{ padding: "10px 5px", borderBottom: "1px solid #ddd" }}>Agregar nivel de educación</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold", padding: "10px 5px" }}>Sitio web</td>
                  <td style={{ padding: "10px 5px" }}>
                    <a href="#" style={{ color: "#1a73e8", textDecoration: "none" }}>Agregar sitio web</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Información de contacto */}
          <section style={{ background: "white", border: "1px solid #ccc", padding: 20, marginBottom: 30 }}>
            <h3>Información de contacto</h3>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td style={{ fontWeight: "bold", padding: "10px 5px", borderBottom: "1px solid #ddd" }}>Dirección postal</td>
                  <td style={{ padding: "10px 5px", borderBottom: "1px solid #ddd" }}>
                    <a href="#" style={{ color: "#1a73e8", textDecoration: "none" }}>Agregar dirección postal</a>
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold", padding: "10px 5px", borderBottom: "1px solid #ddd" }}>Número de teléfono</td>
                  <td style={{ padding: "10px 5px", borderBottom: "1px solid #ddd" }}>
                    <a href="#" style={{ color: "#1a73e8", textDecoration: "none" }}>901974128 (Móvil)</a>
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold", padding: "10px 5px" }}>Número de fax laboral</td>
                  <td style={{ padding: "10px 5px" }}>
                    <a href="#" style={{ color: "#1a73e8", textDecoration: "none" }}>Agregar número de fax laboral</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Información laboral */}
          <section style={{ background: "white", border: "1px solid #ccc", padding: 20 }}>
            <h3>Información laboral</h3>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td style={{ fontWeight: "bold", padding: "10px 5px", borderBottom: "1px solid #ddd" }}>Empresa</td>
                  <td style={{ padding: "10px 5px", borderBottom: "1px solid #ddd" }}>Agregar empresa</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold", padding: "10px 5px", borderBottom: "1px solid #ddd" }}>Cargo</td>
                  <td style={{ padding: "10px 5px", borderBottom: "1px solid #ddd" }}>Agregar título del puesto</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold", padding: "10px 5px" }}>Departamento</td>
                  <td style={{ padding: "10px 5px" }}>Agregar departamento</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        {/* Derecha: Configuración del sistema */}
        <div style={{ flex: 1 }}>
          <section style={{ background: "white", border: "1px solid #ccc", padding: 20, height: "100%" }}>
            <h3>Configuración del sistema</h3>
            <table style={{ width: "100", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td style={{ fontWeight: "bold", padding: "10px 5px", borderBottom: "1px solid #ddd" }}>Idioma</td>
                  <td style={{ padding: "10px 5px", borderBottom: "1px solid #ddd", color: "#1a73e8", cursor: "pointer" }}>
                    Predeterminado del sistema (Español (España))
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold", padding: "10px 5px", borderBottom: "1px solid #ddd" }}>Ajustes de privacidad</td>
                  <td style={{ padding: "10px 5px", borderBottom: "1px solid #ddd", color: "#1a73e8", cursor: "pointer" }}>
                    Solo los profesores pueden ver la información de mi perfil
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold", padding: "10px 5px" }}>Ajustes de notificaciones generales</td>
                  <td style={{ padding: "10px 5px", lineHeight: 1.5 }}>
                    <a href="#" style={{ color: "#1a73e8", textDecoration: "none", display: "block", marginBottom: 5 }}>Notificaciones de secuencias</a>
                    <a href="#" style={{ color: "#1a73e8", textDecoration: "none", display: "block", marginBottom: 5 }}>Notificaciones por correo electrónico</a>
                    <a href="#" style={{ color: "#1a73e8", textDecoration: "none", display: "block" }}>Notificaciones emergentes</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Perfil;