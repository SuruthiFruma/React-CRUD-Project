
import Button from "./Button"
const Header = (props) => { 
  return (
    <header className="header">
        <h2 style={headingStyle}>{props.title}</h2>
        <Button color="green" text="Add"></Button>
    </header>
  )
}
const headingStyle={  
    color:'black',
    backgroundColor:'white'
}

export default Header
