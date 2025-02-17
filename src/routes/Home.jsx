import React from 'react'
import Card from '../components/Card'
import {products} from '../data/products.json'
import '../styles/Home.css'

function Home() {
  return (
    <>
      <section className='overflow-x-auto ms-4 scroll-container'>
        <section className='d-flex produtos_container'>
          {products.map((produto) => (
            <div key={produto.id} className='card_produto'>
              <Card titulo={produto.titulo} preco={produto.preco} />
            </div>
          ))}
        </section>
      </section>
    </>
  )
}

export default Home