
const NuevoPresupuesto = () => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form className="formulario">
            <div className="campo">
                <label>Definir Orçamento</label>

                <input
                    className="nuevo-presupuesto"
                    type="text"
                    placeholder="Inserir valor orçamento"
                />
            </div>

            <input type="submit" value="Inserir"/>
        </form>
    </div>
  )
}

export default NuevoPresupuesto