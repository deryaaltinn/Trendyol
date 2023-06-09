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
                                   <a className='d-flex justify-content-end' href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                          </svg></a>

                                    
                                    <a className='d-flex justify-content-center' href="">
                                        <img className="img mt-3 mb-3" src={item.picture} alt="Picture" />
                                    </a> 
                                      <h6>{item.mark} </h6>
                                       <p>{item.ozellik}</p>
                                       <h6 className='fiyat'>{item.fiyat} TL</h6>

                                  
                                    
                                    
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