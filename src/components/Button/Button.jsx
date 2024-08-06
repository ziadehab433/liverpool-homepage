import "./Button.css"

const Button = ({ children, style }) => {
  return (
    <a href=""> 
      <button className="gen-button" style={style}>{ children }</button>
    </a>
  )
}

export default Button