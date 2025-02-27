import ButtonEntrar from "../components/ButtonEntrar";
import InputForm from "../components/inputForm";
import { PasswordIcon, photoLogin } from "../utils/Icons";
import User from '../assets/user.svg';
import "../styles/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="d-flex">
      <div className="img-container col-6 d-none d-xl-block">
        <img src={photoLogin} alt="" />
      </div>
      <div className="login-container col-6">
        <h1>Bem vindo!</h1>
        <form className="d-flex flex-column">
          <InputForm  type={"text"} icon={User} placeholder={"Nome de usuario"}/>
          <InputForm type={"password"} icon={PasswordIcon} placeholder={"Senha"}/>
          <div className="container-btn d-flex flex-row mt-5 ">
            <Link className="LinkLogin">Esqueci minha senha</Link>
            <ButtonEntrar color={"color-btn-gradient-red"} type={"Button"} text={"ENTRAR"}/> 
          </div>
        </form>
      </div>
    </main>
  )
}

export default Login