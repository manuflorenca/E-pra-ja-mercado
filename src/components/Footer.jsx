import "../styles/Footer.css"
import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='Footer text-center text-md-start'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Sobre nós</h5>

            <p>
            O É Pra Já é um e-commerce online focado em rapidez, praticidade e qualidade.
            Nosso objetivo é oferecer uma experiência de compra simples e eficiente, garantindo que seus produtos cheguem até você no menor tempo possível. Trabalhamos com uma seleção de itens de alta qualidade e um atendimento ágil para tornar sua compra mais fácil e satisfatória.
            É Pra Já – porque a sua necessidade não pode esperar!
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>

            <ul className="list-unstyled">
                <li className="mb-2">
                    <a href="#!" className="text-white">
                    <i className="bi bi-whatsapp"> Whatsapp</i>
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#!" className="text-white">
                    <i className="bi bi-instagram"> Instagram</i>
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#!" className="text-white">
                    <i className="bi bi-telephone-fill"> 11 978605883</i>
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#!" className="text-white">
                    <i className="bi bi-facebook"> Facebook</i>
                    </a>
                </li>
            </ul>

          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2025 Copyright: {' '}
        <a className='text-white' href='https://github.com/manuflorenca'>
            ManuFlorenca
        </a>
        {' '} e {' '}
        <a className='text-white' href='https://github.com/GabrielFRCordeiro'>
            GabrielFRCordeiro
        </a>
      </div>
    </MDBFooter>
  );
}