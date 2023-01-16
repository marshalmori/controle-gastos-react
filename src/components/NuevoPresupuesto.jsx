
const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form className="formulario">
            <div className="campo">
                <label>Definir Orçamento</label>

                <input
                    className="nuevo-presupuesto"
                    type="text"
                    placeholder="Inserir valor orçamento"
                    value={presupuesto}
                    onChange={ e => setPresupuesto(e.target.value)}
                />
            </div>

            <input type="submit" value="Inserir"/>
        </form>
    </div>
  )
}

export default NuevoPresupuesto