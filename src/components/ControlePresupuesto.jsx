import { useEffect, useState } from "react";


const ControlePresupuesto = ({gastos, presupuesto}) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado;

        setGastado(totalGastado);
        setDisponible(totalDisponible);
    }, [gastos])


    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p>Aqui vai o gráfico</p>
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
  )
}

export default ControlePresupuesto