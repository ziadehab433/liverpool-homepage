import "./Button.css"

const Button = ({ children, style }) => {
  return (
    <button className="gen-button" style={style}>{ children }</button>
  )
}

export default Button