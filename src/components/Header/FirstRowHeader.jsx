const FirstRowHeader = ({top}) => {
  return (
    <div className={`relative ${top}  flex overflow-hidden w-full *:shrink-0`}>
    {
      Array.from({length:15}).map((_,index)=>{
        
        return <div key={index} style={{animationDelay:`${(index+1)*0.10}s`}} className='conteiner animated one conteinerD'>
        <div className='rigth rigthD'></div>
        <div className='left leftD'></div>
     </div> 
      })
    }


  </div>
  )
}
export default FirstRowHeader