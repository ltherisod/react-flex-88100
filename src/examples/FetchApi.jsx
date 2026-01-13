import {useState, useEffect} from 'react'
import FetchList from './FetchList'
import { useFetch } from '../hooks/useFetch'

const FetchApi = () => {
    const {data, loading, error}= useFetch('https://rickandmortyapi.com/api/character')
    // const [personajes, setPersonajes] = useState([])

    // useEffect(()=>{
    //     //PEDIR DATOS
    //     fetch('https://rickandmortyapi.com/api/character')
    //     .then((response)=> response.json())//traducir
    //     .then((data)=> setPersonajes(data.results))
    //     .catch((error)=> console.log(error))
    // },[])

console.log(data, 'data')
  return (
    <div>
      { loading ? <p>Cargando personajes....</p> : <FetchList personajes={data?.results}/>}
    </div>
  )
}

export default FetchApi