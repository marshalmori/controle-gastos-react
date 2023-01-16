import { useState } from "react";
import Mensaje from "./Mensaje";


const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault();
        
        if(!Number(presupuesto) || Number(presupuesto) < 0){
            setMensaje("Valor de orçamento inválido.")
        } else {
            // setMensaje('Valor de orçamento válido.')
        }
    }
  
  
    return (
    <div className="contenedor-presupuesto contenedor sombra">

        <form onSubmit={handlePresupuesto} className="formulario">
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

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto