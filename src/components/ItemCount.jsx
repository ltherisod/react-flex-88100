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
            <button className="btn btn-danger" onClick={restar}>-</button>
            <span className="btn">{counter}</span>
             <button className="btn btn-success" onClick={sumar}>+</button>
        </div>
    )
}

export default ItemCount