import React, { useState } from "react";

const Organizaciones = () => {
  const [view, setView] = useState("lista"); // o "cuadricula"
  const [search, setSearch] = useState("");
  const [periodo, setPeriodo] = useState("todos");
  const [filtro, setFiltro] = useState("todas");
  const [itemsPorPagina, setItemsPorPagina] = useState(25);

  return (
    <div
      style={{
        padding: 20,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 15,
          alignItems: "center",
          flexWrap: "wrap",
          marginBottom: 20,
        }}
      >
        {/* Botones vista */}
        <div>
          <button
            onClick={() => setView("lista")}
            style={{
              backgroundColor: view === "lista" ? "#555" : "#ddd",
              color: view === "lista" ? "white" : "#555",
              border: "none",
              padding: "6px 10px",
              cursor: "pointer",
              borderRadius: "3px 0 0 3px",
              fontWeight: "bold",
            }}
            aria-label="Vista lista"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              fill={view === "lista" ? "white" : "#555"}
            >
              <rect x="3" y="4" width="18" height="3" />
              <rect x="3" y="10.5" width="18" height="3" />
              <rect x="3" y="17" width="18" height="3" />
            </svg>
          </button>
          <button
            onClick={() => setView("cuadricula")}
            style={{
              backgroundColor: view === "cuadricula" ? "#555" : "#ddd",
              color: view === "cuadricula" ? "white" : "#555",
              border: "none",
              padding: "6px 10px",
              cursor: "pointer",
              borderRadius: "0 3px 3px 0",
              fontWeight: "bold",
            }}
            aria-label="Vista cuadrícula"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              fill={view === "cuadricula" ? "white" : "#555"}
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
          </button>
        </div>

        {/* Buscador */}
        <input
          type="search"
          placeholder="Buscar sus organizaciones"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: "1 1 300px",
            padding: "6px 10px",
            borderRadius: 3,
            border: "1px solid #ccc",
            fontSize: 14,
          }}
        />

        {/* Select Períodos */}
        <select
          value={periodo}
          onChange={(e) => setPeriodo(e.target.value)}
          style={{
            padding: "6px 10px",
            borderRadius: 3,
            border: "1px solid #ccc",
            fontSize: 14,
            minWidth: 160,
          }}
          aria-label="Períodos"
        >
          <option value="todos">Todos los períodos</option>
          {/* Aquí podrías agregar más opciones */}
        </select>

        {/* Select Filtros */}
        <select
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          style={{
            padding: "6px 10px",
            borderRadius: 3,
            border: "1px solid #ccc",
            fontSize: 14,
            minWidth: 180,
          }}
          aria-label="Filtros"
        >
          <option value="todas">Todas las organizaciones</option>
          {/* Aquí podrías agregar más opciones */}
        </select>

        {/* Select elementos por página */}
        <select
          value={itemsPorPagina}
          onChange={(e) => setItemsPorPagina(Number(e.target.value))}
          style={{
            padding: "6px 10px",
            borderRadius: 3,
            border: "1px solid #ccc",
            fontSize: 14,
            width: 80,
          }}
          aria-label="Elementos por página"
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>

        <span style={{ fontSize: 14, color: "#444" }}>elementos por página</span>
      </div>

      {/* Mensaje sin datos */}
      <div
        style={{
          textAlign: "center",
          color: "#999",
          fontSize: 14,
          marginTop: 30,
          fontWeight: "normal",
        }}
      >
        No está inscrito en ninguna organización ni período
      </div>
    </div>
  );
};

export default Organizaciones;
