import './App.css';
import { NavBar } from './components/NavBar.js';
import { ItemListContainer } from './components/ItemListContainer.js';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo={"No hay nada, ni sé qué vendo."}/>
    </div>
  );
}

export default App;
