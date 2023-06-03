import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';

function Navbar() {
  return (
    <div >
        <Container>
            <div className='navv'>
                <Row>
                    <Col className='col-sm-2'>
                        <img  src="data:image/png;base64,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" alt="" />
                  </Col>
                    <Col className='col-sm-6 '>
                     <input  type="text" placeholder='Aradığınız kategori,marka ya da ürünü yazınız' /> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    </Col>
                    <Col className='col-sm-4'>
                    <ul class="d-flex p-0">
                      <li>  <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                          </svg> Giriş Yap</a>
                       </li>

                        <li> <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                          </svg> Favorilerim</a>
                        </li>

                        <li> <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                          </svg> Sepetim</a>
                        </li>
                    </ul>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
  )
}

export default Navbar