import ControlePresupuesto from './ControlePresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto , gastos}) => {
  return (
    <header>
        <h1>Planilha de Gastos</h1>

        {isValidPresupuesto ? (
            <ControlePresupuesto gastos={gastos} presupuesto={presupuesto}/>
        ) : (
            <NuevoPresupuesto 
            
                presupuesto={presupuesto} 
                setPresupuesto={setPresupuesto} 
                setIsValidPresupuesto={setIsValidPresupuesto}
            />
        )}
       
    </header>
  )
}

export default Header