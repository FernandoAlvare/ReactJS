import './App.css';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Navbar from '../src/components/NavBar/Navbar';
import Item from "../src/components/Item/Item";
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <div>
     <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting={'HOME'} />}/>
          <Route path='/category/:idcategoria' element={<ItemListContainer />}/>
          <Route path='/item/:iditem' element={<ItemDetailContainer />}/>
        </Routes>
     </BrowserRouter>
 
      
      
      
    </div>
      
    
  );
}

export default App;
