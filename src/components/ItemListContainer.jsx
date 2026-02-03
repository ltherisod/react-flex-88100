import { useEffect, useState } from "react"
import { getProducts } from "../asyncMock/data"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Loader from "./Loader"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"
const ItemListContainer = ({saludo, greeting})=> {
const [data, setData]= useState([])
const [loading, setLoading]= useState(false)
const {type}= useParams()

console.log('Type: ',type)


useEffect(()=>{
        setLoading(true)
        //1. conectar a nuestra coleccion
      const prodCollection = type ? query(collection(db, "productos"), where("category", "==", type)) : collection(db, "productos")
      //2. pedir los documentos
      getDocs(prodCollection)
      .then((res)=>{//tratamos la promesa
        console.log(res)
        console.log(res.docs)
        //limpiar y obtener los datos
        const list = res.docs.map((doc)=>{
            return{
                id:doc.id,
                ...doc.data()
            }
        })
        console.log(list)
        setData(list)
      })
        .catch((error)=>console.log(error))//atrapar el error
        .finally(()=> setLoading(false))
        // console.log(getProducts())
    },[type])


//PROMESA
    //se ejecuta una sola veez
    // useEffect(()=>{
    //     setLoading(true)
    //     //pedir datos
    //     getProducts()//retorna una promesa
    //     .then((res)=> {
    //         if(type){
    //             //filtrar
    //             setData(res.filter((prod)=> prod.category === type ))
    //         }else{
    //             //no filtro
    //             setData(res)
    //         }
    //     })//tratando la promesa y guandando la res en un estado
    //     .catch((error)=>console.log(error))//atrapar el error
    //     .finally(()=> setLoading(false))
    //     // console.log(getProducts())
    // },[type])
    
    // const {saludo}= props
    // console.log(props)
    // console.log('ItemListContainer')
    // console.log(data)
    return(
        <>
        {
            loading 
            ? <Loader text={type ? 'Cargando categoría' : 'Cargando productos'}/>
            : <div>
            <h1>{saludo} {type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1>
           
            {/* {data.map((prod)=><div key={prod.id} >
                <p>Producto:{prod.name}</p>
                <p>${prod.price}</p>
            </div>)} */}
            <ItemList data={data}/>
        </div>
        }
        </>
    )
}

export default ItemListContainer