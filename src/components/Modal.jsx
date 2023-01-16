import CerrarBtn from '../assets/img/cerrar.svg';

const Modal = ({setModal}) => {

    const ocultarModal = () => {
        setModal(false);
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img 
                src={CerrarBtn} 
                alt="Botão de fechar" 
                onClick={ocultarModal}
            />
        </div>
    </div>
  )
}

export default Modal