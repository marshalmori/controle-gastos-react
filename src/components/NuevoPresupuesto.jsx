import { useState } from "react";
import Mensaje from "./Mensaje";


const NuevoPresupuesto = ({
        presupuesto, 
        setPresupuesto, 
        setIsValidPresupuesto
    }) => {
    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault();
        
        if(!presupuesto || presupuesto < 0){
            setMensaje("Valor de orçamento inválido.")
            return;
        }
        setMensaje('');
        setIsValidPresupuesto(true);

        
    }
  
  
    return (
    <div className="contenedor-presupuesto contenedor sombra">

        <form onSubmit={handlePresupuesto} className="formulario">
            <div className="campo">
                <label>Definir Orçamento</label>

                <input
                    className="nuevo-presupuesto"
                    type="number"
                    placeholder="Inserir valor orçamento"
                    value={presupuesto}
                    onChange={ e => setPresupuesto(Number(e.target.value))}
                />
            </div>

            <input type="submit" value="Inserir"/>

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto