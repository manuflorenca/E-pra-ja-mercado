import React from 'react'
import Card from '../components/Card'
import {products} from '../data/products.json'
import '../styles/Home.css'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Banner/>
      <section className='overflow-x-auto ms-4 scroll-container'>
        <section className='d-flex produtos_container'>
          {products.map((produto) => (
            <div key={produto.id} className='card_produto'>
              <Link to={`/produto/${produto.id}`}>
              <Card titulo={produto.titulo} preco={produto.preco} />
              </Link>
            </div>
          ))}
        </section>
      </section>
    </>
  )
}

export default Home