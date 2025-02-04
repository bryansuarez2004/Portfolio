import useEmblaCarousel from "embla-carousel-react";
import { proyects } from "../../models/proyects";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import ButtonToProyect from "../UI/ButtonToProyect";
import { FaCode, FaGithub } from "react-icons/fa";
import { useDotButton } from "../../hooks/useDotButton";

const Proyects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  const [proyectSelected, setProyectSelected] = useState(proyects[0]);
  const {onDotButtonClick,selectedIndex,scrollSnaps} = useDotButton(emblaApi)

  const onSelect = () => {
    if (!emblaApi) return;
    setProyectSelected(proyects[emblaApi.selectedScrollSnap()]);
  };
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();

    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi]);

  return (
    <div id='proyects' className="sm:pl-13 font-main pt-20 p-5   font-bold text-4xl">
      <h2 className="mb-10 flex gap-2 items-center"> <FaCode/> Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:auto-rows-[390px]  sm:gap-10 max-w-[1200px] mx-auto">
        <div className="">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container ">
              {proyects.map((proyect) => {
                return (
                  <div className="embla__slide mr-5 p-1">
                    <a href={proyect.linkProyect} target="_blank">

                    <img
                      src={proyect.image}
                      className="h-full w-full cursor-pointer  rounded-2xl ring-3 ring-slate-950"
                      alt=""
                      />
                      </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" flex gap-3 mt-5 justify-center ">
          {scrollSnaps.map((_, index) => (
            <div
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={ `${index === selectedIndex ? ' bg-slate-950' : ''} aspect-square w-[7px] sm:w-[13px] rounded-full ring-2 ring-slate-950 cursor-pointer`
              
             }>

            
              </div>
          ))}
          </div>
        </div>
        <div className=" p-3 gap-4 flex flex-col">
          <h2 className="sm:text-5xl text-3xl">{proyectSelected.name}</h2>
          <div className="flex flex-wrap gap-2">
            {proyectSelected.technologies.map((proyect) => {
              return (
                <div className="text-base px-1 sm:px-2 sm:py-1 rounded-full ring-cyan-700 ring-2 text-cyan-700">
                  {proyect}
                </div>
              );
            })}
          </div>
          <p className="text-base grow">{proyectSelected.description}</p>
          <div className="flex gap-2 items-center">
            <ButtonToProyect link={proyectSelected.linkProyect} />
            <button>
              <FaGithub className="hover:rotate-45 cursor-pointer hover:scale-110 transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Proyects;
