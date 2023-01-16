

const ControlePresupuesto = ({presupuesto}) => {

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
                <span>Disponível: </span> {formatearCantidad(0)}
            </p>
            <p>
                <span>Gasto: </span> {formatearCantidad(0)}
            </p>
        </div>
    </div>
  )
}

export default ControlePresupuesto