import "../styles/Button.css";

const Button = ({ icon, text, color }) => {
    return (
      <button className={`Btn-acao ${color}`}> <img className='Icon-btn' src={icon} alt="" /> {text}</button>
    );
  };
  
export default Button