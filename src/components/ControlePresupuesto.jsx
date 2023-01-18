import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlePresupuesto = ({ gastos, presupuesto }) => {
  const [porcentaje, setPorcentaje] = useState(0);
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );
    const totalDisponible = presupuesto - totalGastado;

    //Cálculo porcentagem do gráfico
    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);

    setDisponible(totalDisponible);
    setGastado(totalGastado);

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1000);
  }, [gastos]);

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: "#3b82f6",
            trailColor: "#f5f5f5",
            textColor: "#3b82f6",
          })}
          value={porcentaje}
          text={`Gastou ${porcentaje}%`}
        />
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Orçamento: </span> {formatearCantidad(presupuesto)}
        </p>
        <p>
          <span>Disponível: </span> {formatearCantidad(disponible)}
        </p>
        <p>
          <span>Gasto: </span> {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlePresupuesto;
