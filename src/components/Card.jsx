import '../styles/Card.css'
import ShoppingCart from '../assets/shopping-cart.svg'
import Heart from '../assets/heart.svg'

export default function Card({titulo, nota, preco}) {
  return (
    <>
        <div className="img_produto"></div>
        <div className="d-flex px-2 pt-3 info_produto">
            <div className="col-6 d-flex flex-column justify-content-between">
                <h5>{titulo}</h5>
                <div>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                </div>
                <p className='m-0'>R$ {preco}</p>
            </div>
            <div className="col-6 align-self-end d-flex justify-content-around">
                <button className='card_btn btn_carrinho d-flex align-items-center py-1'><img src={ShoppingCart} alt="" /></button>
                <button className='card_btn btn_favorito d-flex align-items-center py-1'><img src={Heart} alt="" /></button>
            </div>
        </div>
    </>
  )
}
