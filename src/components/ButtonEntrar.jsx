import "../styles/ButtonEntrar.css"

const ButtonEntrar = ({ text, color }) => {
  return (
    <button className={`Btn-entrar ${color}`} type="submit"> {text}</button>
  )
}

export default ButtonEntrar