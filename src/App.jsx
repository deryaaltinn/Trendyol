
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
import Menumobile from './Components/Menumobile';





function App() {
  
  return (
    <div className="App">
     <Navbar/>
     <Navbarmobile/>
     <Menu/>
     <Menumobile/>
     <Destek/>
     <Destekmobile/>
     <Carousel/>
     <Kategoriler/>
     <Cards/>    
     <Fetchslider/>
     <Cards/>
     <Footer/>
     
     
    
    
    </div>
  );
}

export default App;
