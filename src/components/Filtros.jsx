import { useState, useEffect } from "react";

const Filtros = ({ filtro, setFiltro }) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label>Filtrar Gastos</label>
          <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
            <option value="">--Selecionar--</option>
            <option value="ahorro">Poupança</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos diversos</option>
            <option value="ocio">Lazer</option>
            <option value="salud">Saúde</option>
            <option value="suscripciones">Assinaturas</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
