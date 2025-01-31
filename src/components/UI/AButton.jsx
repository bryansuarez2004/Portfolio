export const AButton = ({children,addlink,download=false}) => {
  return (
    <a href={addlink} target="_blank"  download={download ? "BryanSuarezCurriculum.pdf" : undefined}>

    <div className="font-main max-w-max hover:bg-stone-950 hover:text-white  font-bold text-xl sm:text-2xl ring-2 px-3 py-2 sm:px-6 sm:py-4 cursor-pointer flex items-center rounded-full">
     
        {children}
    </div>
    </a>
  )
}