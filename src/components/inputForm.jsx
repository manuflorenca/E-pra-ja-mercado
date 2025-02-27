import "../styles/InputForm.css";

const InputForm = ({icon,type,placeholder}) => {

  return (
    <label>
        <img className="Icon-img" src={icon} alt="" />
        <input type={type} className="Input-Name" placeholder={placeholder}/>
    </label>
  )
}

export default InputForm