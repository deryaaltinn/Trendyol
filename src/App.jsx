
import './Style/Style.css';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import Destek from './Components/Destek';
import Carousel from './Components/Carousel';
import Kategoriler from './Components/Kategoriler';
import Cards from './Components/Cards';
import { Container,Row,Col } from 'react-bootstrap';
import Fetchslider from './Components/Fetchslider';




function App() {
  return (
    <div className="App">
     <Navbar/>
     <Menu/>
     <Destek/>
     <Carousel/>
     <Kategoriler/>
    
     <Cards/>
    <Fetchslider/>
     
    
    
    </div>
  );
}

export default App;
