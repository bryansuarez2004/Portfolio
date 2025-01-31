import { LuUserRoundCheck } from "react-icons/lu"

const AboutMe = () => {
  return (
    <div id="aboutMe" className=" py-18 p-5 sm:p-13 grid gap-5 font-main max-w-[700px] font-bold text-4xl">
        <div className="flex gap-2">

    <h2> Sobre Mí</h2>
        <LuUserRoundCheck />
        </div>
        <p className="text-xl">
        Me llamo Bryan Suarez, soy un <span className="text-cyan-800">desarrollador web fullstack especializado en front end</span>, apasionado por el trabajo en equipo y <span className="text-cyan-800">
        comprometido con el aprendizaje constante</span>.
        </p>
        <p className="text-xl">
         Mi autonomía y capacidad de aprendizaje rápido me permite dominar rápidamente nuevas tecnologías, por lo que no me resulta difícil migrar de tecnologías o aprender nuevas si se necesita, además, como profesional <span className="text-cyan-800">me impulso a mantenerme actualizado en mi campo</span> y buscar oportunidades para crecer.
        </p>
</div>
  )
}
export default AboutMe