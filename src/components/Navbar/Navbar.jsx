import { FaCode, FaLaptopCode } from "react-icons/fa";
import useDoScroll from "../../hooks/useDoScroll";
import { LuUserRoundCheck } from "react-icons/lu";
import { BsFillTelephoneFill } from "react-icons/bs";

const Navbar = () => {
  const { scrolled } = useDoScroll();

  return (
    <div
      className={` ${
        scrolled ? "opacity-100 visible   " : "opacity-0 invisible "
      } transition-all duration-500 fixed border *:hover:border-b-1 *:hover:border-b-slate-950 *:border-b-2 *:border-transparent *:cursor-pointer top-5 sm:bottom-auto  font-main text- flex sm:gap-3 translate-x-[-50%] px-4 left-[50%] *:text-3xl sm:*:text-base gap-5  z-100 backdrop-blur-xs bg-slate-100/30 p-2 rounded-full`}
    >
      <a href="#proyects ">
        {" "}
        <FaCode className="sm:hidden" />{" "}
        <span className="hidden sm:block">Proyectos</span>
      </a>

      <a href="#aboutMe">
        {" "}
        <LuUserRoundCheck className="sm:hidden"  />
        <span className="hidden sm:block">Sobre mi</span>
      </a>
      <a href="#technologies">
        {" "}
        <FaLaptopCode className="sm:hidden" />{" "}
        <span className="hidden sm:block">Tecnologias</span>
      </a>
      <a href="#contact">
        {" "}
        <BsFillTelephoneFill className="sm:hidden" />{" "}
        <span className="hidden sm:block">Contactame</span>
      </a>
    </div>
  );
};
export default Navbar;
