import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../asyncMock/data'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Loader from './Loader'

const ItemDetailContainer = () => {
    const [detail, setDetail]= useState({})
    const [cargando, setCargando]=useState(true)
  //   const param = useParams()
  // console.log(param)
   const {id} = useParams()
    //si quiero reutilizar la funcion de itemListContainer
    // useEffect(()=>{
    //     getProducts()
    //     .then((res)=> setDetail(res.find((prod)=> prod.id === '03')))
    //     .catch((error)=> console.log(error))
    // },[])

    //si hago una funcion a parte
    useEffect(()=>{
        getOneProduct(id)
        .then((res)=> setDetail(res))
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
    },[id])
  return (
    <>
       {cargando ? <Loader text='Cargando detalle...'/> : <ItemDetail detail={detail}/>} 
    </>
  )
}

export default ItemDetailContainer