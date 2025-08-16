import React from "react";

const actividades = [
  {
    fecha: "15 de jul. de 2025",
    titulo: "Mejora de Método en el trabajo",
    vencimiento: "Avance - E01",
    entrega: "22/8/25 23:59 (UTC-5)",
    color: "#00bfa5",
  },
  {
    fecha: "4 de ago. de 2025",
    titulo: "SEMINARIO DE COMPLEMENTACIÓN PRÁCTICA III",
    vencimiento: "Tarea 02",
    entrega: "23/8/25 23:59 (UTC-5)",
    color: "#00bcd4",
  },
  {
    fecha: "4 de ago. de 2025",
    titulo: "TECNOLOGÍA CLOUD CON AWS",
    vencimiento: "Evaluación Parcial T02",
    entrega: "23/8/25 23:59 (UTC-5)",
    color: "#2196f3",
  },
  {
    fecha: "5 de ago. de 2025",
    titulo: "REV Y CALIF CUADERNOS INFORME",
    vencimiento: "Entrega de Informe de Práctica 01",
    entrega: "23/8/25 23:59 (UTC-5)",
    color: "#ff5722",
  },
  {
    fecha: "4 de ago. de 2025",
    titulo: "SEMINARIO DE COMPLEMENTACIÓN PRÁCTICA III",
    vencimiento: "Informe de Práctica IP02",
    entrega: "31/8/25 23:59 (UTC-5)",
    color: "#00bcd4",
  },
];

const Actividades = () => {
  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif", background: "#fafafa" }}>
      <div style={{ marginBottom: 20 }}>
        <label htmlFor="filtro" style={{ fontWeight: "bold", marginRight: 10 }}>
          Filtrar
        </label>
        <select id="filtro" style={{ padding: 5 }}>
          <option>Mostrar todo</option>
          {/* Puedes añadir más opciones aquí */}
        </select>
      </div>

      <h2 style={{ color: "#555", fontWeight: "normal", marginBottom: 20 }}>Próximo</h2>

      <div>
        {actividades.map((act, i) => (
          <div key={i} style={{ display: "flex", marginBottom: 25, position: "relative" }}>
            {/* Fecha a la izquierda */}
            <div style={{ width: 120, fontStyle: "italic", color: "#888", fontSize: 12, textAlign: "right", paddingRight: 15 }}>
              {act.fecha}
            </div>

            {/* Línea y cuadro */}
            <div style={{ position: "relative", width: 40, display: "flex", justifyContent: "center" }}>
              {/* Línea vertical */}
              {i !== actividades.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: 22,
                    left: "50%",
                    width: 2,
                    height: "100%",
                    backgroundColor: "#ccc",
                    transform: "translateX(-50%)",
                    zIndex: 0,
                  }}
                />
              )}
              {/* Cuadro */}
              <div
                style={{
                  width: 20,
                  height: 20,
                  border: "2px solid #000",
                  backgroundColor: "#fff",
                  zIndex: 1,
                }}
              />
            </div>

            {/* Texto con detalles */}
            <div style={{ paddingLeft: 15, flex: 1 }}>
              <div style={{ borderLeft: `4px solid ${act.color}`, paddingLeft: 10, fontWeight: "bold", fontSize: 14, color: "#000", marginBottom: 5 }}>
                {act.titulo}
              </div>
              <div style={{ fontSize: 12, color: "#444" }}>
                <strong>Fecha de vencimiento:</strong> {act.vencimiento}
              </div>
              <div style={{ fontSize: 12, color: "#444" }}>
                <strong>Fecha de entrega:</strong> {act.entrega}
              </div>
            </div>
          </div>
        ))}
      </div>

      <a href="#" style={{ fontSize: 13, color: "#0073e6", textDecoration: "none" }}>
        Mostrar más próximas actividades
      </a>
    </div>
  );
};

export default Actividades;
