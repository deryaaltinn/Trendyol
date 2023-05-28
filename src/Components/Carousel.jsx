import React from 'react'

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

function Carousel() {
  return (
    <div>  
   
 <div class='container-fluid' >            
  <OwlCarousel items={12}  
    className="owl-theme"  
    loop
     
    margin={10} >  
     <div> <a  href=""><img  className="img"src={'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/2/14/En_Cok_Satanlar_202302142041.png'}/> Cok Satanlar</a> </div>  
     <div> <a href=""><img  className="img"src={'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/2/14/Senin_Icin_Sectik_202302142041.png'}/> Sana Özel</a> </div>  
     <div> <a href=""><img  className="img"src={'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/5/5/Widget_202305051022.png'}/>Kurumsal</a></div>  
     <div> <a href=""><img  className="img"src={'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Puma_202301271558.jpg'}/>Puma</a></div>  
     <div> <a href=""><img  className="img"src={'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/28/Trendyolmilla_202301280120.jpg'}/>Trendyol</a></div>  
     <div><a href=""><img  className="img"src={'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Adidas_202301262144.png'}/>Adidas</a></div>  
     <div><a href=""><img  className="img"src={'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Apple_202301262111.jpg'}/>Apple</a></div>  
     <div><a href=""><img  className="img"src={'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Dyson_202301270049.jpg'}/>Dyson</a></div>  
     <div><a href=""><img  className="img"src={'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/28/Xiaomi_202301280236.jpg'}/>Xiaomi</a></div>  
     <div><a href=""><img  className="img"src={'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Philips_202301271558.jpg'}/>Philips</a></div>  
     <div><a href=""><img  className="img"src={'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Nike_202301271540.jpg'}/>Nike</a></div>  
     <div><a href=""><img  className="img"src={'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Samsung_202301271715.jpg'}/>Samsung</a></div>  
     <div><a href=""><img  className="img"src={'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Dilvin_202301270049.jpg'}/>Dilvin</a></div>  
     <div><a href=""><img  className="img"src={'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Hummel_202301270232.jpg'}/>Hummel</a></div>  
     <div><a href=""><img  className="img"src={'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/28/Vestel_202301280121.jpg'}/>Vestel</a></div>  
     <div><a href=""><img  className="img"src={'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/2/13/Karaca_202302131917.jpg'}/>Karaca</a></div>  
     <div><a href=""><img  className="img"src={'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Defacto_202301270049.jpg'}/>Defacto</a></div>  
     
 </OwlCarousel>  
</div>  

</div>  
  )
}

export default Carousel