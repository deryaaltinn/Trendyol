import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';

function Footer() {
  return (
    <div className='footer mt-3'> 
    <Container>
        <Row >
            <Col className='col-sm-3 my-5'>
                <ul>
                    <li> <a href=""><h5>TRENDYOL</h5></a></li>
                    <li> <a href="">Biz kimiz</a></li>
                    <li> <a href="">Kariyer</a></li>
                    <li> <a href="">İletişim</a></li>
                    <li> <a href="">Satış yap</a></li>
                    <li> <a href="">Güvenli alışveriş</a></li>
                </ul>
            </Col>
            <Col className='col-sm-3 my-5'>
                <ul>
                    <li> <a href=""><h5>About Us</h5></a></li>
                    <li> <a href="">Who we are</a></li>
                    <li> <a href="">careers</a></li>
                    <li> <a href="">contact us</a></li>
                    <li> <a href="">Sustainability</a></li>
                    <li> <a href="">Mobil uygulamalar</a></li>
                    <li><button><img width={40} src="https://cdn-icons-png.flaticon.com/512/882/882704.png" alt="" />App Store</button>
                    
                    </li>
                    <li><button><img width={40} src="https://cdn-icons-png.flaticon.com/128/300/300218.png" alt="" />Google Play</button>
                    
                    </li>
                    <li><button><img width={40} src="https://cdn-icons-png.flaticon.com/128/347/347673.png" alt="" />App Gallery</button>
                    
                    </li>
                </ul>
            </Col>
            <Col className='col-sm-3 my-5'>
                <ul>
                    <li> <a href=""><h5>Kampanyalar</h5></a></li>
                    <li> <a href="">Aktif Kampanyalar</a></li>
                    <li> <a href="">Elite Üyelik</a></li>
                    <li> <a href="">Hediye Fikirleri</a></li>
                    <li> <a href="">Trendyol Fırsatları</a></li>
                    <li> <a href="">Sosyal Medya</a></li>
                    <li><a href=""><img width={35} src="https://cdn-icons-png.flaticon.com/128/2626/2626292.png" alt="" /></a>
                        <a href=""><img width={30} src="https://cdn-icons-png.flaticon.com/128/145/145802.png" alt="" /></a>
                        <a href=""><img width={30} src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="" /></a>
                        <a href=""><img width={30} src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="" /></a>
                    </li>
                </ul>
            </Col>
            <Col className='col-sm-3 my-5'>
                <ul>
                    <li> <a href=""><h5>Yardım</h5></a></li>
                    <li> <a href="">Sıkça Sorulan Sorular</a></li>
                    <li> <a href="">Canlı Yardım</a></li>
                    <li> <a href="">Nasıl İade Edebilirim</a></li>
                    <li> <a href="">Sustainability</a></li>
                    <li> <a href="">İşlem Rehberi</a></li>
                    <li><button>Ülke Değiştir</button></li>
                </ul>
                
            </Col>
        </Row>
    </Container>


    </div>
  )
}

export default Footer