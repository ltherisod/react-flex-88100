import { useEffect, useState } from "react"
import { getProducts } from "../asyncMock/data"
import ItemList from "./ItemList"
const ItemListContainer = ({saludo, greeting})=> {
const [data, setData]= useState([])

    //se ejecuta una sola veez
    useEffect(()=>{
        //pedir datos
        getProducts()//retorna una promesa
        .then((res)=> setData(res))//tratando la promesa y guandando la res en un estado
        .catch((error)=>console.log(error))//atrapar el error
        // console.log(getProducts())
    },[])
    
    // const {saludo}= props
    // console.log(props)
    console.log('ItemListContainer')
    console.log(data)
    return(
        <div>
            <h1>{saludo}</h1>
            <h2>{greeting}</h2>
            {/* {data.map((prod)=><div key={prod.id} >
                <p>Producto:{prod.name}</p>
                <p>${prod.price}</p>
            </div>)} */}
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer