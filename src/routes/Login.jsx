import ButtonEntrar from "../components/ButtonEntrar"
import { photoLogin } from "../utils/Icons"

const Login = () => {
  return (
    <div>
      <div className="img-container">
        <img src={photoLogin} alt="" />
      </div>
      <div className="login-container">
        <h1>Bem vindo!</h1>
        <form>
          <input type="text" name="name" id="t_field_name" />
          <input type="password" id="t_field_password" />
          <a href="">Esqueci minha senha</a>
          <ButtonEntrar color={"color-btn-gradient-red"} type={"Button"} text={"ENTRAR"}/>
          
        </form>
      </div>
    </div>
  )
}

export default Login