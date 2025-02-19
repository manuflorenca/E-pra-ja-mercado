import '../styles/Home.css'
import { Link } from 'react-router-dom'
import {products} from '../data/products.json'
import Banner from '../components/Banner'
import Card from '../components/Card'

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