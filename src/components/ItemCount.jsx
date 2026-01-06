import { useEffect, useState } from "react"

const ItemCount = ({stock})=> {
    const [counter, setCounter]= useState(1)
    //ejemplo
     const [compra, setCompra]= useState(false)

    const sumar = ()=>{
        if(counter < stock){

            setCounter( counter + 1)
        }
    }
      const restar = ()=>{
        if(counter > 0){

            setCounter( counter - 1)
        }
    }
    const comprar = ()=>{
        setCompra(!compra)
    }

    console.log('ItemCount Monta (se muestra)')

    //se ejecuta siempre (no se utiliza casi nunca)
    useEffect(()=>{
        console.log('Me ejecuto SIEMPRE!')
    })


    //se ejecuta una sola vez

    useEffect(()=>{
        console.log('Me ejecuto UNA SOLA VEZ, cuando se monta el componente')
    },[])


    //se ejecuta cuando se monta el componente y siempre que cambie lo que este escuchando

     useEffect(()=>{
        console.log('Me ejecuto cuando se monta el componente y SIEMPRE que compra CAMBIE', 'compra: ', compra)
    },[compra])



    return(
        <div>
            <button className="btn btn-danger" onClick={restar}>-</button>
            <span className="btn">{counter}</span>
             <button className="btn btn-success" onClick={sumar}>+</button>
             <button className="btn btn-primary" onClick={comprar}>Comprar</button>
        </div>
    )
}

export default ItemCount