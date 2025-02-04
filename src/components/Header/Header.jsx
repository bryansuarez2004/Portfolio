import { links } from '../../models/link'
import { AButton } from '../UI/AButton'
import Button from '../UI/Button'
import FirstRowHeader from './FirstRowHeader'
import './header.css'
import SecondRowHeader from './SecondRowHeader'



const Header = () => {
  return (
   <>
  
    <div className='h-screen relative overflow-hidden customShadow'>
      <div className='absolute flex justify-start p-5 sm:p-20 items-center w-screen h-full top-0 left-0 bg-transparent customShadow z-20'>
                   <div className='grid gap-13 max-w-[800px]'>
             <div className='grid gap-4 sm:gap-5 '>
             <h1 className='font-main text-7xl sm:text-[120px] font-extrabold'>Hola! soy Bryan</h1>
             <p  className='font-main text-6xl sm:text-6xl bordeTexto font-bold text-cyan-300 '>Desarrollador Full Stack</p>
             </div>
                  <p className='font-main text-xl sm:text-2xl  font-bold '>
                    Especializado en Front End, en busca de oportunidades para desempeñar mi experiencia y habilidades, con 2 años de experiencia realizando proyectos con React.
                  </p>
                  <div className='flex  flex-wrap gap-3'>

                  <Button />
                  <AButton addlink={'/curriculum.pdf'} download>
                    Descargar Cv
                  </AButton>  
                  <AButton addlink={links.linkedin}>
                    Linkedin
                  </AButton>
                  </div>
                   </div>
      </div>
    <FirstRowHeader top={'top-[-30px]' } />
    <SecondRowHeader  top={'top-[-60px]' }/>
    <FirstRowHeader top={'top-[-90px]'} />
    <SecondRowHeader top={'top-[-120px]'} animate={false} />
    <FirstRowHeader top={'top-[-150px]'} />
    <SecondRowHeader top={'top-[-180px]'} />
    <FirstRowHeader top={'top-[-210px]'} />
    <SecondRowHeader top={'top-[-240px]'} />
    <FirstRowHeader top={'top-[-270px]'} />
    <SecondRowHeader top={'top-[-300px]'} />
    </div>

   
   </>
  )
}
export default Header