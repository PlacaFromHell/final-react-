import './App.css';
import 'bulma/css/bulma.min.css'; 
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {CartProvider } from './components/CartContext';

import Cart from './components/Cart';
import Checkout from './components/Checkout';
function App() {



  return (

    <div className="App">
          <CartProvider>
      <BrowserRouter>
        <header>
          <Navbar/>
        </header>
        <main>
          <Routes>
          <Route path='/' element={<ItemListContainer titulo={'PRODUCTOS'}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer titulo={'Detalle del producto'}/>}/>
              <Route path='/cart' element={<Cart/> }/>
              <Route path='/checkout' element={<Checkout/> }/>
          </Routes>
        </main>
        <footer>
             <p>
              Keyshop 2023
            </p>
        </footer>
      </BrowserRouter>   
      </CartProvider>
    </div>
  );
}

export default App;
