import FormContact from "../FormContact/FormContact"

const Modal = ({isOpen, onClose}) => {
  return (
    <div className={` ${isOpen ? 'opacity-100 grid' : ' opacity-0 hidden'} transition-all duration-300 fixed w-screen h-screen top-0 left-0 backdrop-blur-xs grid place-items-center bg-slate-200/30 z-100`}>
        <FormContact onclick={onClose} />
    </div>
  )
}
export default Modal