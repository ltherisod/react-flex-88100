import {useEffect} from 'react'
import { useFetch } from '../hooks/useFetch'

const FetchCountries = () => {
  const ejemplo = useFetch('https://restcountries.com/v3.1/name/chile')
  console.log(ejemplo)
    // useEffect(()=>{
    //     fetch('https://restcountries.com/v3.1/name/chile')
    //     .then((reponse)=> reponse.json())// traducir
    //     .then((data)=> console.log(data[0].flag))
    //     .catch((error)=> console.log(error))
    // },[])

  return (
    <div>FetchCountries</div>
  )
}

export default FetchCountries