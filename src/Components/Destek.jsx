import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';

function Destek() {
  return (
    <div>
        <div className='destek'>
            <Container>
                <Row>
                    <Col className='col-4'>
                       <a href=""><img src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2023/2/20/Siparisinumut_Tepebanner_200223_202302202219.jpg" alt="" /></a>
                    </Col>
                    <Col className='col-4'>
                      <a href=""><img src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2023/2/17/Bakanlik1_202302171954.jpg" alt="" /></a> 
                    </Col>
                    <Col className='col-4'>
                       <a href=""> <img src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2023/4/6/Tobb_Tepebanner_0304231_202304061225.png" alt="" /></a>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default Destek