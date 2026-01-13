import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import NavBarBS from './components/NavBarBS';
import FetchCountries from './examples/FetchCountries';
import FetchApi from './examples/FetchApi';
import { withLogging } from './hoc/withLogging';
import ItemDetailContainer from './components/ItemDetailContainer';
function App() {
 
  const greeting ='Hello'
  const ItemListContConHOC = withLogging(ItemListContainer)
  const FetchCONHOC= withLogging(FetchCountries)
// console.log('App')
  return (
    <>
      {/* <Navbar/> */}
      <NavBarBS/>
      {/* <FetchCountries/> */}
      {/* <FetchApi/> */}
      {/* <ItemListContainer saludo='Bienvenidos a mi App!' greeting={greeting}/> */}
      <ItemDetailContainer/>
      {/* NO ENTRA EN LA PRIMER PRENTREGA */}
      {/* <ItemCount stock={10}/> */}
    {/* <FetchCONHOC/> */}
      {/* <ItemListContConHOC saludo='Bienvenidos a mi App!' greeting={greeting}/> */}
    </>
  )
}

export default App
