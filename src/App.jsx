
import './Style/Style.css';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import Destek from './Components/Destek';
import Carousel from './Components/Carousel';
import Kategoriler from './Components/Kategoriler';
import Cards from './Components/Cards';
import Fetchslider from './Components/Fetchslider';
import Footer from './Components/Footer';
import Destekmobile from './Components/Destekmobile';
import Navbarmobile from './Components/Navbarmobile';





function App() {
  
  return (
    <div className="App">
     <Navbar/>
     <Navbarmobile/>
     <Menu/>
     <Destek/>
     <Destekmobile/>
     <Carousel/>
     <Kategoriler/>
     <Cards/>
    
     
     <Fetchslider/>
     <Footer/>
     
     
    
    
    </div>
  );
}

export default App;
