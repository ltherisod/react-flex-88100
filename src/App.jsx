import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import NavBarBS from './components/NavBarBS';
function App() {
 
  const greeting ='Hello'
console.log('App')
  return (
    <>
      {/* <Navbar/> */}
      <NavBarBS/>
      
      <ItemListContainer saludo='Bienvenidos a mi App!' greeting={greeting}/>
      {/* NO ENTRA EN LA PRIMER PRENTREGA */}
      <ItemCount stock={10}/>
    </>
  )
}

export default App
