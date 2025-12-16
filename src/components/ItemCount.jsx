import { useState } from "react"

const ItemCount = ({stock})=> {
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

    console.log('ItemCount')
    return(
        <div>
            <button onClick={restar}>-</button>
            <span>{counter}</span>
             <button onClick={sumar}>+</button>
        </div>
    )
}

export default ItemCount