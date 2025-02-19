import "../styles/Produto.css"
import { Heart, ShoppingCart, Bag, ImgTeste } from "../utils/Icons"
import Button from "../components/Button"

const Produto = () => {
  return (

    <main>
      <section className="section-product">
      <img className="img-product" src={ImgTeste} alt="" /> 
      <div className="div-product">
        <h1>Morango</h1>
        <div>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-half"></i>
          <i className="bi bi-star"></i>
          <i className="bi bi-star"></i>
        </div>
        <p className="p-price">R$ 10,00</p>
        <p className="p-product">
          O morango é uma das frutas mais apreciadas no mundo, conhecido por sua cor vibrante, sabor doce e levemente ácido. Pequeno e suculento,
          ele se destaca não apenas pelo gosto irresistível, mas também pelos seus benefícios à saúde. Rico em vitamina C, antioxidantes e fibras,
          o morango auxilia na imunidade, combate os radicais livres e contribui para a saúde do coração.
          Além de ser consumido in natura, essa fruta versátil pode ser usada em sobremesas, geleias, sucos, bolos e até pratos salgados. Seu aroma
          delicado e refrescante o torna um ingrediente indispensável na culinária. Seja mergulhado no chocolate, batido no leite ou como toque especial em uma salada, o morango é sempre uma escolha deliciosa e nutritiva. </p>
        <div className="div-buttons">    
          <Button color={"color-red"} icon={Heart} text={"Favoritar"}/>
          <Button color={"color-green"} icon={ShoppingCart} text={"Add ao carrinho"}/>
          <Button color={"color-lightgreen"} icon={Bag} text={"Comprar agora"}/>
        </div> 
      </div>
      </section>
    </main>


  )
}

export default Produto