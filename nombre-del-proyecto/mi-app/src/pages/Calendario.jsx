import React, { useState } from "react";

const diasSemana = ["L", "M", "X", "J", "V", "S", "D"];
const meses = ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sep.", "oct.", "nov.", "dic."];

const eventosEjemplo = {
  "2025-08-16": [
    { id: 1, tipo: "Entregable", codigo: "E01", descripcion: "BIG DATA", entrega: "23:59 (UTC-5)", curso: "202520-PIAD-625-TEC-NRC_13229", color: "#f0c808" },
    { id: 2, tipo: "Evaluación Parcial", codigo: "T01", descripcion: "TECNOLOGÍAS", entrega: "23:59 (UTC-5)", curso: "202520-PIAD-626-TEC-NRC_13230", color: "#0078d4" },
    { id: 3, tipo: "Informe de Práctica", codigo: "IP01", descripcion: "SEMINARIO", entrega: "23:59 (UTC-5)", curso: "202520-PIAD-629-TAL-NRC_13825", color: "#31c7ff" },
  ],
};

const tasks = [
  {
    id: 1,
    title: 'Entregable - E01',
    dueDate: '16/8/25 23:59 (UTC-5)',
    link: '202520-PIAD-625-TEC-NRC_13229: BIG DATA Y ANÁLISIS DE DATOS',
    borderColor: '#f5c518', // amarillo
    dueDay: 'Hoy - 16 de agosto de 2025',
  },
  {
    id: 2,
    title: 'Informe de Práctica IP01',
    dueDate: '16/8/25 23:59 (UTC-5)',
    link: '202520-PIAD-629-TAL-NRC_13825: SEMINARIO DE COMPLEMENTACIÓN PRÁCTICA III',
    borderColor: '#6fd1ff', // celeste
    dueDay: 'Hoy - 16 de agosto de 2025',
  },
  {
    id: 3,
    title: 'Evaluación Parcial T01',
    dueDate: '16/8/25 23:59 (UTC-5)',
    link: '202520-PIAD-626-TEC-NRC_13230: TECNOLOGÍA CLOUD CON AWS',
    borderColor: '#347dff', // azul
    dueDay: 'Hoy - 16 de agosto de 2025',
  },
  {
    id: 4,
    title: 'Avance - E01',
    dueDate: '22/8/25 23:59 (UTC-5)',
    link: '202520-CGEU-241-TEC-NRC_13827: Mejora de Método en el trabajo',
    borderColor: '#abf0e0', // verde agua claro
    dueDay: 'viernes - 22 de agosto de 2025',
  },
  {
    id: 5,
    title: 'Entrega de Informe de Práctica 01',
    dueDate: '23/8/25 23:59 (UTC-5)',
    link: '202520-CNIU-108-ACT-NRC_25914: REV Y CALIF CUADERNOS INFORME',
    borderColor: '#ff7c00', // naranja
    dueDay: 'sábado - 23 de agosto de 2025',
  },
  {
    id: 6,
    title: 'Tarea 02',
    dueDate: '23/8/25 23:59 (UTC-5)',
    link: '202520-PIAD-629-TAL-NRC_13825: SEMINARIO DE COMPLEMENTACIÓN PRÁCTICA III',
    borderColor: '#6fd1ff', // celeste
    dueDay: 'sábado - 23 de agosto de 2025',
  },
];

const formatDate = (date) => date.toISOString().slice(0, 10);

const ButtonGroup = ({ options, value, onChange }) => (
  <div style={{ display: "flex", borderRadius: 4, overflow: "hidden", border: "1px solid #000" }}>
    {options.map(opt => (
      <button
        key={opt.value}
        onClick={() => onChange(opt.value)}
        style={{
          backgroundColor: value === opt.value ? "#000" : "#fff",
          color: value === opt.value ? "#fff" : "#000",
          border: "none",
          padding: "10px 26px",
          cursor: "pointer",
          fontWeight: 600,
          fontSize: 16,
        }}
      >
        {opt.label}
      </button>
    ))}
  </div>
);

const SemanaSelector = ({ dias, diaSeleccionado, onSelect, semanaIndex, onChangeSemana }) => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, gap: 40, userSelect: "none" }}>
    <button aria-label="Semana anterior" onClick={() => onChangeSemana(semanaIndex - 1)} style={{ fontSize: 32, background: "none", border: "none", cursor: "pointer", color: "#444" }}>←</button>

    <div style={{ display: "flex", gap: 44 }}>
      {dias.map((dia, i) => {
        const esSeleccionado = formatDate(dia) === formatDate(diaSeleccionado);
        return (
          <div key={i} onClick={() => onSelect(dia)} style={{ textAlign: "center", cursor: "pointer", minWidth: 44, userSelect: "none" }}>
            <div style={{ fontWeight: "600", fontSize: 16, marginBottom: 8 }}>{diasSemana[i]}</div>
            <div
              style={{
                width: 44,
                height: 44,
                lineHeight: "44px",
                borderRadius: "50%",
                backgroundColor: esSeleccionado ? "#6a1b9a" : "transparent",
                color: esSeleccionado ? "#fff" : "#222",
                fontWeight: esSeleccionado ? "700" : "400",
                border: esSeleccionado ? "3px solid #000" : "none",
                margin: "0 auto",
                position: "relative",
              }}
            >
              {dia.getDate()}
              {esSeleccionado && (
                <div style={{ position: "absolute", bottom: -18, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 }}>
                  {[ "#f0c808", "#0078d4", "#31c7ff" ].map((color, idx) => (
                    <span key={idx} style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: color, display: "inline-block" }} />
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>

    <button aria-label="Semana siguiente" onClick={() => onChangeSemana(semanaIndex + 1)} style={{ fontSize: 32, background: "none", border: "none", cursor: "pointer", color: "#444" }}>→</button>
  </div>
);

const EventosLista = ({ eventos }) => (
  eventos.length === 0 ? (
    <div style={{ color: "#999", margin: "auto", fontSize: 18 }}>No hay eventos para este día.</div>
  ) : (
    eventos.map(evento => (
      <div
        key={evento.id}
        title={`${evento.tipo} ${evento.codigo} - ${evento.descripcion}\nFecha de entrega: ${evento.entrega}\nCurso: ${evento.curso}`}
        style={{
          border: `3px solid ${evento.color}`,
          borderRadius: 5,
          minWidth: 420,
          padding: 16,
          backgroundColor: "#fff",
          display: "flex",
          gap: 16,
          alignItems: "flex-start",
          boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
        }}
      >
        <div style={{
          width: 40,
          height: 40,
          border: `3px solid ${evento.color}`,
          borderRadius: 6,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: evento.color,
          fontSize: 24,
          userSelect: "none",
          flexShrink: 0,
        }}>📄</div>
        <div style={{ overflow: "hidden" }}>
          <b style={{ fontSize: 18 }}>{evento.tipo} - {evento.codigo}</b>
          <div style={{ fontSize: 14, color: "#555", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginTop: 4 }}>
            Fecha de entrega: {evento.entrega} · {evento.curso}
          </div>
          <div style={{ marginTop: 8, fontSize: 16, color: "#222", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} title={evento.descripcion}>
            {evento.descripcion}
          </div>
        </div>
      </div>
    ))
  )
);

const TasksList = () => {
  const groupedTasks = tasks.reduce((acc, task) => {
    if (!acc[task.dueDay]) {
      acc[task.dueDay] = [];
    }
    acc[task.dueDay].push(task);
    return acc;
  }, {});

  return (
    <div style={{ maxHeight: '70vh', overflowY: 'auto', paddingRight: 10, width: '100%' }}>
      {Object.entries(groupedTasks).map(([date, items]) => (
        <div key={date} style={{ marginBottom: 40 }}>
          <p style={{ color: '#666', fontSize: 14, marginBottom: 8 }}>{date}</p>
          {items.map((task) => (
            <div
              key={task.id}
              style={{
                border: `2px solid ${task.borderColor}`,
                padding: 12,
                marginBottom: 12,
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
                borderRadius: 4,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  border: `2px solid ${task.borderColor}`,
                  borderRadius: 4,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: task.borderColor,
                  fontWeight: 'bold',
                  fontSize: 24,
                }}
              >
                📄
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.3, flex: 1 }}>
                <strong>{task.title}</strong>
                <br />
                <span style={{ color: '#666' }}>Fecha de entrega: {task.dueDate} · </span>
                <a href="#" style={{ color: '#0288d1', textDecoration: 'underline' }}>
                  {task.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default function Calendario() {
  const hoy = new Date(2025, 7, 16);
  const [tab, setTab] = useState("programar");
  const [vista, setVista] = useState("día");
  const [semanaIndex, setSemanaIndex] = useState(0);
  const [diaSeleccionado, setDiaSeleccionado] = useState(hoy);

  const inicioSemana = new Date(hoy);
  inicioSemana.setDate(hoy.getDate() - (hoy.getDay() === 0 ? 6 : hoy.getDay() - 1) + semanaIndex * 7);
  const diasSemanaMostrar = Array.from({ length: 7 }).map((_, i) => {
    const dia = new Date(inicioSemana);
    dia.setDate(inicioSemana.getDate() + i);
    return dia;
  });

  const fechaCentral = diasSemanaMostrar[3];
  const nombreMesAno = `${meses[fechaCentral.getMonth()]} de ${fechaCentral.getFullYear()}`;
  const fechaClave = formatDate(diaSeleccionado);
  const eventosDia = eventosEjemplo[fechaClave] || [];

  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: 16,
      maxWidth: 1400,
      margin: "50px auto",
      padding: "20px 40px",
      userSelect: "none",
      color: "#222",
      display: "flex",
      flexDirection: "column",
      height: "90vh",
      boxSizing: "border-box",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <ButtonGroup
          options={[
            { label: "Programar", value: "programar" },
            { label: "Fechas de vencimiento", value: "vencimiento" }
          ]}
          value={tab}
          onChange={setTab}
        />
        <h2 style={{ margin: 0, fontWeight: 400, fontSize: 20, textTransform: "lowercase" }}>{nombreMesAno}</h2>
        <ButtonGroup options={[{ label: "Día", value: "día" }, { label: "Mes", value: "mes" }]} value={vista} onChange={setVista} />
      </div>

      <SemanaSelector
        dias={diasSemanaMostrar}
        diaSeleccionado={diaSeleccionado}
        onSelect={setDiaSeleccionado}
        semanaIndex={semanaIndex}
        onChangeSemana={setSemanaIndex}
      />

      <div style={{
        display: "flex",
        flexGrow: 1,
        borderTop: "1px solid #ddd",
        overflow: "hidden",
        fontSize: 15,
      }}>
        {tab === "programar" && (
          <>
            <div style={{
              width: 60,
              borderRight: "1px solid #ddd",
              color: "#666",
              userSelect: "none",
              fontSize: 13,
              paddingTop: 6,
              paddingLeft: 10,
              lineHeight: "44px",
              height: "100%",
              boxSizing: "border-box",
            }}>
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} style={{ borderBottom: i < 23 ? "1px solid #eee" : "none" }}>{i}:00</div>
              ))}
            </div>

            <div style={{
              flexGrow: 1,
              overflowY: "auto",
              padding: "12px 20px 12px 0",
              display: "flex",
              gap: 14,
              boxSizing: "border-box",
            }}>
              <EventosLista eventos={eventosDia} />
            </div>
          </>
        )}

        {tab === "vencimiento" && <TasksList />}
      </div>
    </div>
  );
}
