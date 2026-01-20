import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavBarBS from './components/NavBarBS';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './components/Error';
import Input from './examples/Input';
function App() {
 


  return (
    <BrowserRouter>
      <NavBarBS/>
      <Input/>
     <Routes>
      <Route path='/' element={ <ItemListContainer saludo='Bienvenidos a mi App!' />}/>
       <Route path='/category/:type' element={ <ItemListContainer saludo='Estas en la categoria: ' />}/>
      <Route path='/item/:id' element={ <ItemDetailContainer/>}/>
      <Route path='*' element={<Error/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
