import './App.css';
import { NavBar } from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import 'bulma/css/bulma.min.css';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar/>
        </header>
        <main>
          <Routes>
              <Route path='/' element={<ItemListContainer titulo={'Nuestros Productos'}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer titulo={'Detalle del producto'}/>}/>
              <Route path='*' element={ <h1> Routes not Found </h1> }/>
          </Routes>
        </main>
        <footer>
             <p>
              Alto footer
            </p>
        </footer>
      </BrowserRouter>   
    </div>

    
  );
}

export default App;
