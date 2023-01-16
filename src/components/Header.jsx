import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {
  return (
    <header>
        <h1>Planilha de Gastos</h1>

        {isValidPresupuesto ? (
            <p>Controle de orçamento</p>
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