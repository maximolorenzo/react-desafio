import NavBar from './components/navbar/NavBar.js'
import './App.css';
import ItemListConteinter from './components/ItemListConteiner/ItemListConteiner.js';
import ItemDitalConteiner from './components/ItemDetailConteiner/ItemDitalConteiner.js';

function App() {
  return (
    <>
   <NavBar />
   <ItemListConteinter greetings = "Bienvenidos !" />
   <ItemDitalConteiner />
   </>
  );
}

export default App;
