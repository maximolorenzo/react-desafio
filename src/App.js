import NavBar from './components/navbar/NavBar.js'
import './App.css';
import ItemListConteinter from './components/ItemListConteiner/ItemListConteiner.js';

function App() {
  return (
    <>
   <NavBar />
   <ItemListConteinter greetings = "Bienvenidos !" />
   </>
  );
}

export default App;
