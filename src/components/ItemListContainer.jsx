import { useEffect, useState } from "react"
import { getProducts, products } from "../asyncMock/data"
import ItemList from "./ItemList"
import { useNavigate, useParams } from "react-router-dom"
import Loader from "./Loader"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"
const ItemListContainer = ({saludo, greeting})=> {
const [data, setData]= useState([])
const [loading, setLoading]= useState(false)
const [error, setError]= useState(null)
const {type}= useParams()
const navegar = useNavigate()



useEffect(()=>{
        setLoading(true)
        //1. conectar a nuestra coleccion
      const prodCollection = type ? query(collection(db, "productos"), where("category", "==", type)) : collection(db, "productos")
      //2. pedir los documentos
      getDocs(prodCollection)
      .then((res)=>{//tratamos la promesa
        const list = res.docs.map((doc)=>{
            return{
                id:doc.id,
                ...doc.data()
            }
        })
       
        setData(list)
      })
        // .catch((error)=>setError(error))//atrapar el error
         .catch((error)=>{
            console.log(error)
            navegar('/error')
         })//atrapar el error
        .finally(()=> setLoading(false))
    },[type])

if(error){
    return <p>Hubo un error, intente mas tarde</p>
}
    return(
        <>
        {
            loading 
            ? <Loader text={type ? 'Cargando categoría' : 'Cargando productos'}/>
            : <div>
            <h1>{saludo} {type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1>
            
            <ItemList data={data}/>
        </div>
        }
        </>
    )
}

export default ItemListContainer