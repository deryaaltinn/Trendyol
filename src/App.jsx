
import './Style/Style.css';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import Destek from './Components/Destek';
import Carousel from './Components/Carousel';
import Kategoriler from './Components/Kategoriler';




function App() {
  return (
    <div className="App">
     <Navbar/>
     <Menu/>
     <Destek/>
     <Carousel/>
     <Kategoriler/>
    </div>
  );
}

export default App;
