import "../styles/Produto.css";
import { Heart, ShoppingCart, Bag, ImgTeste } from "../utils/Icons";
import Button from "../components/Button";
import Comment from "../components/Comment";
import {products} from '../data/products.json'
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const Produto = () => {
  return (

    <main className="row">
      <section className="section-product col-12">
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
      <section className="section-review col-5 p-5">
        <h2 className="title-products">Avaliações</h2>
        <Comment
         username={products[1].avaliacoes[0].nome}
         comment={products[1].avaliacoes[0].comentario}/>
        <Comment
                 username={products[1].avaliacoes[1].nome}
                 comment={products[1].avaliacoes[1].comentario}/>
      </section>
      <section className="section-cards col-7 p-5">

        <h2 className="title-products">Relacionados</h2>
        <div className="container text-center">
          <div className="row row-cols-2">
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="col">
                <div className="card_produto">
                  <Link to={`/produto/${product.id}`}>
                    <Card titulo={product.titulo} preco={product.preco} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>


  )
}

export default Produto