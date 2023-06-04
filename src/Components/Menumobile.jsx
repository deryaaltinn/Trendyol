import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

function Menumobile() {
   

  return (
    <div className='menu-mobile'>  
      
 <div class='container-fluid' >            
  <OwlCarousel items={5}  
    className="owl-theme"  
    loop  
      
    margin={20} >  
     <div> <a href="">Kadın</a> </div>  
     <div> <a href="">Erkek</a> </div>  
     <div> <a href="">Çocuk</a> </div>  
     <div> <a href="">Kozmetik</a> </div>  
     <div> <a href="">Teknoloji</a> </div>  
     <div> <a href="">Bakım</a> </div>  
     <div> <a href="">Mobilya</a> </div>  
     <div> <a href="">Anne</a> </div>  
     <div> <a href="">Mutfak</a> </div>  
     <div> <a href="">market</a> </div>  
     <div> <a href="">Ayakkabı</a> </div>  
     <div> <a href="">Çanta</a> </div>  
  
</OwlCarousel>  
</div>  

</div>  
  )
}

export default Menumobile