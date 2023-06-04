import React from 'react'
import { Container,Row,Col,Carousel } from 'react-bootstrap';



function Destekmobile() {
  return (
    <div className='destekmobile mt-3'>
         <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2023/2/17/Bakanlik1_202302171954.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2023/2/20/Siparisinumut_Tepebanner_200223_202302202219.jpg"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2023/4/6/Tobb_Tepebanner_0304231_202304061225.png"
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>

        
       
    </div>
  )
}

export default Destekmobile