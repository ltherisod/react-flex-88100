import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../asyncMock/data'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [detail, setDetail]= useState({})

    //si quiero reutilizar la funcion de itemListContainer
    // useEffect(()=>{
    //     getProducts()
    //     .then((res)=> setDetail(res.find((prod)=> prod.id === '03')))
    //     .catch((error)=> console.log(error))
    // },[])

    //si hago una funcion a parte
    useEffect(()=>{
        getOneProduct('03')
        .then((res)=> setDetail(res))
        .catch((error)=> console.log(error))
    },[])
  return (
    <div>
        <ItemDetail detail={detail}/>
    </div>
  )
}

export default ItemDetailContainer