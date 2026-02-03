import { createContext, useState } from "react";

//crear contexto
export const CartContext=createContext()


//crear el proveedor 
export const CartProvider = ({children})=> {
const [cart, setCart]=useState([])

    //funciones (herramientas)
    //agregar un item al carrito (COMPONENTE ITEMDETAIL)
    const addItem = (item, qty)=> {
        // console.log(item, qty)
        //  console.log({...item, quantity:qty})
        if(isInCart(item.id)){
            //ya existe modificar cantidades
            setCart(
                cart.map((prod)=> {
                    if(prod.id === item.id){
                        //aca sumo cantidades
                        return {...prod, quantity: prod.quantity + qty}
                    }else{
                        //aca retonrno sin modificar
                        return prod
                    }
                })
            )
        }else{
            //no existe lo agrego
            setCart([...cart,{...item, quantity:qty}])
        }
    }

    //borrar todo el carrito(COMPONENTE CART Y CHECKOUT)
    const clear = ()=> {
        setCart([])
    }

    //eliminar un item del carrito(COMPONENTE CART)
    const removeItem = (id)=> {
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    //retornar un booleano
    const isInCart = (id)=>{
        return cart.some((prod)=> prod.id === id)
    }


    //funcion para el total a pagar
     const total = ()=> {
        return cart.reduce((acc, prod)=> acc += (prod.quantity * prod.price),0 )
     }
         const totalConImpuestos = ()=> {
        return cart.reduce((acc, prod)=> acc += (prod.quantity * prod.price),1.5 )
     }

     //funcion que sume cantidades
     const cartQuantity = ()=> {
        return cart.reduce((acc, prod)=> acc += prod.quantity,0)
     }



    return(
        <CartContext.Provider value={{cart, addItem, clear, removeItem, total, cartQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

