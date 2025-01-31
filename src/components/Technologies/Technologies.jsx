import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi"
import { FaCss3Alt, FaGitAlt, FaLaptopCode, FaReact } from "react-icons/fa"
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io"
import { SiExpress, SiMongodb, SiNodedotjs, SiReactquery, SiSequelize, SiTailwindcss } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

const Technologies = () => {
  return (
    <div id="technologies" className="sm:p-13 p-5 py-17 font-main font-bold text-4xl ">
    <section  className='relative py-10 '>
          <div className="flex gap-2 mb-15">
         
             <h2> Mis Tecnologías</h2>
          <FaLaptopCode />
                 </div>
         <section className='flex w-[90%] mx-auto   flex-wrap justify-center gap-10 text-black *:h-[70px]  sm:*:h-[100px] *:rounded-lg  *:flex  *:items-center *:justify-start *:flex-col  *:border-black *:gap-2  *:transition *:duration-500'>
            <div className=' '>
            <FaReact className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 text-blue-800'/>
            <span className='text-xs sm:text-base text-black'>React</span>
            </div>
            <div className=''>
            <FaCss3Alt className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 text-blue-700' />
            <span className='text-xs sm:text-base opacity-100 text-black '>Css</span>
            </div>
            <div className=' group *:transition-all *:duration-500'>
            <IoLogoHtml5 className='text-4xl hover:scale-[0.8] transition-all duration-100  sm:text-6xl shrink-0 scale-[1.2] text-orange-600' />
            <span className='text-xs sm:text-base opacity-100  text-black'>Html</span>
            </div>
            <div className=' group *:transition-all *:duration-500'>
            <SiTailwindcss className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 scale-[1.2] text-sky-600' />
            <span className='text-xs sm:text-base opacity-100  text-black'>Tailwind</span>
            </div>
            <div className=' group *:transition-all *:duration-500'>
            <IoLogoJavascript className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 scale-[1.2] text-yellow-500' />
            <span className='text-xs sm:text-base opacity-100  text-black'>Javascript</span>
            </div>
            <div className=' group *:transition-all *:duration-500'>
            <FaGitAlt className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 scale-[1.2] text-orange-600'/>
            <span className='text-xs sm:text-base opacity-100  text-black'>Git</span>
            </div>
            <div className=' group *:transition-all *:duration-500'>
            <BiLogoPostgresql className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 scale-[1.2] text-slate-950' />
            <span className='text-xs sm:text-base opacity-100  text-black'>Postgres</span>
            </div>
            <div className=' group *:transition-all *:duration-500'>
            <SiExpress className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 scale-[1.2] text-slate-400' />
            <span className='text-xs sm:text-base  opacity-100  text-black'>Express</span>
            </div>
            <div className=' group *:transition-all *:duration-500'>
            <SiNodedotjs className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 scale-[1.2] text-green-700' />
            <span className='text-xs sm:text-base opacity-100  text-black'>Node</span>
            </div>
            <div className=' group *:transition-all *:duration-500'>
            <SiSequelize className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 scale-[1.2] text-blue-500' />
            <span className='text-xs sm:text-base opacity-100 transition-all duration-300 text-black'>Sequelize</span>
            </div>
            
            <div className=' group *:transition-all *:duration-500'>
            <SiReactquery className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 scale-[1.2] text-red-500' />
            <span className='text-xs sm:text-base opacity-100 transition-all duration-300 text-black'>React Query</span>
            </div>

            <div className=' group *:transition-all *:duration-500'>
            <BiLogoTypescript  className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 scale-[1.2] text-blue-500' />
            <span className='text-xs sm:text-base opacity-100 transition-all duration-300 text-black'>Typescript</span>
            </div>

            <div className=' group *:transition-all *:duration-500'>
            <TbBrandNextjs  className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 scale-[1.2] text-zinc-500' />
            <span className='text-xs sm:text-base opacity-100 transition-all duration-300 text-black'>Next Js</span>
            </div>

            <div className=' group *:transition-all *:duration-500'>
            <SiMongodb   className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 scale-[1.2] text-green-600' />
            <span className='text-xs sm:text-base  opacity-100 transition-all duration-300 text-black'>Mong DB</span>
            </div>
         </section>
    </section>
</div>
  )
}
export default Technologies 