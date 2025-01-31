import { BsFillTelephoneFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { links } from "../../models/link";
import { CgMail } from "react-icons/cg";

const ContactMe = ({openModal}) => {
  return (
    <div  className="p-13 font-main font-bold text-4xl">
      <div className="flex gap-2 ">
        <h2> Contáctame</h2>
        <BsFillTelephoneFill />
      </div>
      <p className="text-xl mb-5">
        Dame la oportunidad de demostrar cuanto puedo aportar a tu empresa
      </p>
      <div className="flex flex-wrap justify-center gap-5 p-5 *:p-4 *:rounded-lg  *:flex *:items-center *:flex-col *:border-2 *:border-black *:w-[160px] *:h-[160px] *:gap-2 *:justify-center *:dark:border-white *:dark:text-white *:transition *:duration-500">
        <a href={links.github} target="_blank" className="  block button ">
          <FaGithub className="text-4xl" />
          Github
        </a>
        <a href={links.linkedin} target="_blank" className="  block button ">
          <FaLinkedin className="text-4xl" />
          Linkedin
        </a>
        <a href={links.wsp} target="_blank" className="block  button">
          <FaWhatsapp className="text-4xl" />
          Whatsapp
        </a>
        <button onClick={openModal} className="button cursor-pointer">
          <CgMail className="text-4xl" />
          correo
        </button>
      </div>
    </div>
  );
};
export default ContactMe;
