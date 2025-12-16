import './App.css'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import Navbar from "./components/Navbar"

function App() {
 
  const greeting ='Hello'
console.log('App')
  return (
    <>
      <Navbar/>
      <ItemListContainer saludo='Bienvenidos a mi App!' greeting={greeting}/>
      {/* NO ENTRA EN LA PRIMER PRENTREGA */}
      {/* <ItemCount stock={10}/> */}
    </>
  )
}

export default App
