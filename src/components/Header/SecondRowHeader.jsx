const SecondRowHeader = ({top,animate=true}) => {
    const thereAnimate = animate
    console.log(animate);
    
  return (
    <div className={`relative *:left-[-60px] ${top}    w-full flex overflow-hidden  *:shrink-0`}>
    {
      Array.from({length:15}).map((_,index)=>{
          
        return <div key={index} style={{animationDelay:`${((index+1)*0.10)+4}s`}} className={` ${thereAnimate? 'animated' : ''}   conteiner  one conteinerD`}>
        <div className='rigth rigthD'></div>
        <div className='left leftD'></div>
     </div> 
      })
    }


  </div>
  )
}
export default SecondRowHeader