import { CgMail } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { IoIosText } from "react-icons/io";
import { links } from "../../models/link";
import { IoClose } from "react-icons/io5";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

const FormContact = ({ onclick = false }) => {
  const {register,handleSubmit,formState:{errors},reset }=useForm()
 
  const onSubmit = handleSubmit((data)=>{
    
    emailjs.send("service_rh3cbxc","template_4d5imvt",{
      name: data.nombre,
      message: data.mensaje,
      email: data.correo,
      reply_to: "",
      }, 'xvYLbpTmF2GDN6ZoV')
    .then((result) => {
        console.log(result.text);
        alert('se envió correctamente')
        reset()
    }, (error) => {
        console.log(error.text);
        alert('hubo un error en el envio, por favor intente denuevo')
    })
       
   
 }) 


  return (
    <div id="contact" className="p-2">
      <form
      onSubmit={onSubmit}
        action=""
        className="bg-teal-50 shadow-2xl shadow-teal-100 relative w-[90%] max-w-[600px] py-5 font-main mx-auto rounded-md p-5"
      >
        {onclick && (
          <IoClose
            onClick={onclick}
            className="absolute top-5 right-5 text-3xl hover:text-teal-800 cursor-pointer"
          />
        )}
        <h2 className="text-4xl font-bold mb-5 text-center">
          {" "}
          Envíame un Email
        </h2>
        <p className="mb-5">
          Coloca tu nombre y correo para enviarme un mensaje y contactarte
          conmigo, pero si deseas puedes enviarme un email a travez del correo
          aquí:{" "}
          <a className="text-teal-600 hover:underline" href={links.email}>
            bryansf2004@gmail.com
          </a>
        </p>
        <div className="grid gap-6">
          <div className="relative">
            <input
              id="nombre"
              placeholder="Tu nombre"
              className=" p-2 rounded-md bg-slate-200 w-full"
              type="text"
              {...register('nombre',{
                required:{
                  value:true,
                  message:'el nombre es requerido'
                }
              })}
            />
            <FaRegUser className="absolute top-[50%] translate-y-[-50%] right-3 text-slate-500" />
          {errors.nombre && <span className='text-red-600 absolute block text-sm '>{errors.nombre.message}</span> }
          </div>

          <div className="relative">
            <input
              placeholder="Tu correo"
              className=" p-2 rounded-md bg-slate-200 w-full"
              type="text"
              {...register('correo',{
                required:{
                  value:true,
                  message:'el correo es requerido'
                },
                pattern:{
                  value:/.*@.*/,
                  message:'el correo debe ser válido'
                }
              })}
            />
            <CgMail className="absolute top-[50%] text-xl translate-y-[-50%] right-3 text-slate-500" />
          {errors.correo && <span className='text-red-600 absolute block text-sm '>{errors.correo.message}</span> }
          </div>

          <div className="relative">
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Escribeme un mensaje . . . "
              className=" p-2 resize-none rounded-md bg-slate-200 w-full"
              {...register('mensaje',{
                required:{
                  value:true,
                  message:'debe escribir un mensaje'
                }
              })}
            ></textarea>
            <IoIosText className="absolute top-[15px] right-3 text-slate-500" />
          {errors.mensaje && <span className='text-red-600 absolute block text-sm '>{errors.mensaje.message}</span> }
          
          </div> 
          <p>Este formulario me enviará tu mensaje directamente a mi correo: <a className="text-teal-600 hover:underline" href={links.email}>
            bryansf2004@gmail.com
          </a></p>
          <button className="button block w-[80%] mx-auto cursor-pointer">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormContact;
