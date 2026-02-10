import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../service/firebase"
import { Link } from "react-router-dom"
import EmptyCart from "./EmptyCart"
import { useForm } from "react-hook-form"


const CheckoutRHF = () => {

const [orderId, setOrderId]= useState(null)

const [process, setProcess]= useState(false)
const {cart, total, clear}= useContext(CartContext)
const {register, handleSubmit, formState:{errors}, getValues}=useForm()

// console.log(errors)

const finalizarCompra = (data)=> {

//    console.log(data)
        setProcess(true)
        let orden = {
            comprador: {
                name: data.name,
                lastname:data.lastname,
                email: data.email
            },
            compras: cart,
            total:total(),//llamar a la funcion total de tu contexto
            date: serverTimestamp()
        }
       const ventas = collection(db, "orders")
       //agregar unn doc
       addDoc(ventas, orden)
       .then((res)=>{
        setOrderId(res.id)
        clear()
       })
       .catch((error)=> console.log(error))
       .finally(()=> setProcess(false))
    
}       


if(!cart.length && !orderId){
    return <EmptyCart/>
}

  return (
   <>
   {
    orderId 
    ?<div>
        <h2>Muchas gracias por su compra</h2>
           <h4>Su orden es: {orderId}</h4>
           <Link className='btn btn-dark' to='/'>Volver a Home</Link>
    </div>
    :<div>
        <h1>Complete por favor los datos</h1>
            <form className='p-4 border rounded shadow-sm bg-light' onSubmit={handleSubmit(finalizarCompra)} >
            <input className='form-control' name='name' type='text' placeholder='Ingrese su nombre' {...register("name", {required:true, minLength:3})}/>
              {errors?.name?.type === 'required' && <span style={{color:'red'}}>Por favor complete el campo Nombre</span>}
                {errors?.name?.type === 'minLength' && <span style={{color:'red'}}>El nombre debe contener 3 caracteres como mínimo</span>}
              <input className='form-control' name='lastname' type='text' placeholder='Ingrese su apellido' {...register("lastname", {required:true, minLength:2, maxLength:35})}/>
               {errors?.lastname?.type === 'required' && <span style={{color:'red'}}>Por favor complete el campo Apellido</span>}
                {errors?.lastname?.type === 'minLength' && <span style={{color:'red'}}>El apellido debe contener 2 caracteres como mínimo</span>}
                 {errors?.lastname?.type === 'maxLength' && <span style={{color:'red'}}>El apellido es muy largo</span>}
                <input className='form-control' name='email' type='email' placeholder='Ingrese su correo' {...register("email", {required:true})}/>
                   {errors?.email?.type === 'required' && <span style={{color:'red'}}>Por favor complete el campo</span>}
                 <input className='form-control' name='email2' type='email' placeholder='Repita su correo' {...register("secondemail", {required:true, validate:{equalsMails: mail2 => mail2 === getValues().email}})}  />
                   {errors?.secondemail?.type === 'required' && <span style={{color:'red'}}>Por favor complete el campo</span>}
                    {errors?.secondemail?.type === 'equalsMails' && <span style={{color:'red'}}>Los correos deben ser iguales</span>}
                 <button type='submit' className='btn btn-success' disabled={process} >{process ? 'Procesando Orden...' : 'Generar Orden'}</button>
        </form>
    </div>
   }
    
   </>
  )
}

export default CheckoutRHF