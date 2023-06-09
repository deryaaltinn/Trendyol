import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import { Container } from 'react-bootstrap';


function Fetchslider() {
    const[data,setData] = useState([])
    useEffect(()=>{
        fetch("Veritabani.json")
        .then(res => res.json())
        .then(value=>{
            setData(value)
        })
    },[])
    console.log(data)



  return (
    <div>
       {
         data && data.length>0 ?(
              <Container>
                          <div className='carousell2 my-5 py-2'>  
            <h3 className='ms-3'>Yıldızlı Ürünler</h3>
   
 <div class='container-fluid' >            
  <OwlCarousel items={12}  
    className="owl-theme"  
    loop

    responsive={{
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }}
   
     
    margin={20} >  
     {data.map(item => (
                                  
                                <div className='urunler   ' key={item.id}>
                                    
                                    <a className='d-flex justify-content-center' href="">
                                        <img className="img mt-3 mb-3" src={item.picture} alt="Picture" />
                                    </a> 
                                      <h6>{item.mark} </h6>
                                       <p>{item.ozellik}</p>
                                       <h6>{item.fiyat} TL</h6>

                                  
                                    
                                    
                                </div>  
                            ))}
     
     
 </OwlCarousel>  
</div>  

</div>  
              </Container>
           

             
            
            
            
         ) : (
            <h2>Veriler yükleniyor...</h2>
         )
       }
    </div>
  )
}

export default Fetchslider