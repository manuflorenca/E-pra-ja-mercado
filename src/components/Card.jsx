import '../styles/Card.css'
import { ShoppingCart, Heart } from '../utils/Icons'

export default function Card({titulo, nota, preco}) {
  return (
    <>
        <div className="img_produto"></div>
        <div className="px-2 pt-3 info_produto">
            <div className="row">
                <h5>{titulo}</h5>
            </div>
            <div className="row">
                <div className="col-7 d-flex flex-column justify-content-between">
                    <div>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                    </div>
                    <p className='m-0'>R$ {preco}</p>
                </div>
                <div className="col-3 px-0 align-self-end d-flex justify-content-around">
                    <button className='card_btn btn_carrinho d-flex align-items-center py-1 me-2'><img src={ShoppingCart} alt="" /></button>
                    <button className='card_btn btn_favorito d-flex align-items-center py-1'><img src={Heart} alt="" /></button>
                </div>
            </div>
        </div>
    </>
  )
}
