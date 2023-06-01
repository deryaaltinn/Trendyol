import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';

function Kategoriler() {
  return (
    <div className='Kategoriler'>
        <Container>
            <Row>
                <Col className='col-4 kategori1'>
                   <button className='buton1' ><h5>Sepete En Çok Eklenenler</h5></button> 
                  
                </Col>
                <Col className='col-4 kategori2'>
                    <button><h5>En Çok Öne Çıkanlar</h5></button>
                  
                </Col>
                <Col className='col-4 kategori3'>
                   <button><h5>Flaş Ürünler</h5></button> 
                  
                </Col>
            </Row>

        </Container>

    </div>
  )
}

export default Kategoriler