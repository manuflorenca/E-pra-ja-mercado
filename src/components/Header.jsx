import React from 'react'
import ShoppingCart from '../assets/shopping-cart.svg'
import '../styles/Header.css'
import Search from '../assets/search.svg'
import Heart from '../assets/heart.svg'
import User from '../assets/user.svg'

const Header = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={ShoppingCart} className='logo' alt="" /></a>     
                    <form className="d-flex" role="search">
                    <input className="Pesquisa form-control me-2" type="search" placeholder="Pesquisar produtos" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit"><img className='BtnPesquisa' src={Search} alt="" /></button>
                    </form>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#"><img className='IconsNav' src={Heart} alt="" /> Favoritos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#"><img className='IconsNav' src={ShoppingCart} alt="" /> Carrinho</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#"><img className='IconsNav' src={User} alt="" /> Conta</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header