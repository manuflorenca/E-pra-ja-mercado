import "../styles/Button.css";

const Button = ({ icon, text, color, type }) => {
    return (
      <button className={`Btn-acao ${color}`} type={type}> <img className='Icon-btn' src={icon} alt="" /> {text}</button>
    );
  };
  
export default Button