import { useState } from "react"
import AboutMe from "./components/AboutMe/AboutMe"
import ContactMe from "./components/ContactMe/ContactMe"
import FormContact from "./components/FormContact/FormContact"
import Header from "./components/Header/Header"
import Modal from "./components/Modal/Modal"
import Navbar from "./components/Navbar/Navbar"
import PopUp from "./components/PopUp/PopUp"
import Proyects from "./components/Proyects/Proyects"
import Technologies from "./components/Technologies/Technologies"

function App() {
   const [modalIsOpen, setModalIsOpen] = useState(false)
   const closeModal = () => {
    setModalIsOpen(false)
    console.log('cerrandomodal');
    
   }
   const openModal = () =>{
    setModalIsOpen(true)

   }

  return (
    <>
   <Navbar />
     <Header />
    <div className=" bg-[radial-gradient(ellipse_80%80%_at_50%-20%,rgb(6,182,212,.40),rgb(34,211,238,.30),rgba(165,243,252,.20))]">
     <Proyects />
     <AboutMe />
     <Technologies />
     <ContactMe openModal ={openModal}/>
     <PopUp openModal={openModal}  />
     <FormContact />
    </div>
    <Modal isOpen={modalIsOpen} onClose={closeModal}  />
    </>
  )
}

export default App
