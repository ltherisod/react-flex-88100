import {  useState } from "react"

const ItemCount = ({stock, onAdd})=> {
    const [counter, setCounter]= useState(1)
  

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
  

    const comprar = ()=> {
        onAdd(counter)
    }


    return(
        <>
       {
        stock > 0 
        ? <div>
            <button className="btn btn-danger" onClick={restar}>-</button>
            <span className="btn">{counter}</span>
             <button className="btn btn-success" onClick={sumar}>+</button>
             {/* <button className="btn btn-primary" onClick={comprar} >Comprar</button> */}
               <button className="btn btn-primary" onClick={()=>onAdd(counter)} disabled={counter === 0 || stock === 0}>Comprar</button>
        </div>
        :<p>Lo sedntimos, por el momento no hay stock disponible 😭</p>
        }
    </>
    )
}

export default ItemCount