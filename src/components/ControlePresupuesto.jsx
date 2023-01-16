

const ControlePresupuesto = ({presupuesto}) => {
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p>Aqui vai o gráfico</p>
        </div>

        <div className="contenido-presupuesto">
            <p>
                <span>Orçamento: </span> U${presupuesto}
            </p>
        </div>
    </div>
  )
}

export default ControlePresupuesto