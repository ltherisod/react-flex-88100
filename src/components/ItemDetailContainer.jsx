import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../asyncMock/data'
import { Link, useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Loader from './Loader'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
    const [detail, setDetail]= useState({})
    const [cargando, setCargando]=useState(true)
    const [invalid, setInvalid]=useState(null)
  //   const param = useParams()
  // console.log(param)
   const {id} = useParams()


   //FIREBASE
   useEffect(()=>{
      const docRef = doc(db, "productos", id)
      getDoc(docRef)
      .then((res)=> {
        if(res.data()){
          setDetail({
          id:res.id,
          ...res.data()
        })
        }else{
          setInvalid(true)
        }
      })
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
    },[id])

    
    //si quiero reutilizar la funcion de itemListContainer
    // useEffect(()=>{
    //     getProducts()
    //     .then((res)=> setDetail(res.find((prod)=> prod.id === '03')))
    //     .catch((error)=> console.log(error))
    // },[])
//PROMESA
    //si hago una funcion a parte
    // useEffect(()=>{
    //     getOneProduct(id)
    //     .then((res)=> setDetail(res))
    //     .catch((error)=> console.log(error))
    //     .finally(()=> setCargando(false))
    // },[id])
if(invalid){
  return(
    <div>
      <h2>El producto no existe! ⚠️</h2>
      <Link className='btn btn-dark' to='/'>Volver a Home</Link>
    </div>
  )
}

  return (
    <>
       {cargando ? <Loader text='Cargando detalle...'/> : <ItemDetail detail={detail}/>} 
    </>
  )
}

export default ItemDetailContainer