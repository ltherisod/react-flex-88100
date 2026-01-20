import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../asyncMock/data'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [detail, setDetail]= useState({})
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
    },[id])
  return (
    <div>
        <ItemDetail detail={detail}/>
    </div>
  )
}

export default ItemDetailContainer