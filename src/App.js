import NavBar from './components/navbar/NavBar.js'
import './App.css';
import ItemListConteinter from './components/ItemListConteiner/ItemListConteiner.js';
import ItemDitalConteiner from './components/ItemDetailConteiner/ItemDitalConteiner.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './components/Cart/Cart.js'
function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element = {<ItemListConteinter greetings = "Bienvenidos !" />}  />
        <Route path='/category/:category' element = {<ItemListConteinter greetings = "Bienvenidos !" />}  />
        <Route path='/product/:id' element = {<ItemDitalConteiner />} />
        <Route path='/cart' element = {<Cart/>} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
