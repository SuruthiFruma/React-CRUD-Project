

const Button = (props) => {
    let {color,text}=props||{}
    const onclick=()=>{
        console.log('Clicked')
    }
  return (
   
      <button className="btn" style={{backgroundColor:color}} onClick={onclick}>{text}</button>
    
  )
}

export default Button
