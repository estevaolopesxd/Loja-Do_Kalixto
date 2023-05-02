import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


//pages
import Home from './Pages/Home/Home';
import Contato from './Pages/Contato/Contato';
import Favorites from './Pages/Favorites/Favorites'

//components
import Slider from './Components/Slider/Slider';
import Wpp from './Components/Wpp/Wpp';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import FavoritesProvider from './contexts/FavoritesContext';


function App() {
  return (
    <div className="App">


      <div className='info'>
        <p>Telefone WhatsApp Contato</p>
      </div>






      <BrowserRouter>

        <FavoritesProvider>

          <Navbar />


          <section>
            <Slider />

            <div className='personalizer'>

              <div className='item'>
                <i class="fa-solid fa-house-chimney"></i>
                <p>Há X anos atendendo Belo Horizonte e regiõies.</p>
              </div>

              <div className='item'>
                <i class="fa-solid fa-truck"></i>
                <p>Frete Gratis</p>
              </div>

              <div className='item'>
                <i class="fa-solid fa-check"></i>
                <p>Garantia</p>
              </div>

              <div className='item'>
                <i class="fa-solid fa-screwdriver-wrench"></i>
                <p>Montagem inclusa</p>
              </div>


              <div>

              </div>
            </div>
          </section>
          <Routes>
            <Route basename="/" />
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>

        </FavoritesProvider>
      </BrowserRouter>



      <Footer />
      <Wpp />

    </div>
  );
}

export default App;
