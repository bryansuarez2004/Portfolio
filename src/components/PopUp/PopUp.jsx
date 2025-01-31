import { CgMail } from "react-icons/cg"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { links } from "../../models/link"
import useDoScroll from "../../hooks/useDoScroll"

const PopUp = ({openModal}) => {
    const {scrolled} = useDoScroll()
  return (
    <div className={`${scrolled ? 'opacity-100 visible   ' : 'opacity-0 invisible '}    fixed z-40 right-[25px] top-[20vh] rounded-full transition-all duration-700`}>
    <div className=' grid columns-1 gap-3'>
      <a href={links.wsp} target='_blank' className='block group button'>
     <FaWhatsapp className='text-2xl group-hover:text-green-300' />
    
     </a>
     <a href={links.linkedin} target='_blank' className='block group button'>
     <FaLinkedin className='text-2xl group-hover:text-cyan-500 ' />
    
     </a>
     <a href={links.github} target='_blank' className=' block button '>
     <FaGithub className='text-2xl' />
    

     </a>

     <button onClick={openModal}  className='group cursor-pointer button popUp' >
     <CgMail className='text-2xl group-hover:text-red-500' />
       
     </button>
    </div>
     </div>
     
  )
}
export default PopUp