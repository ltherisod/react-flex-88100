

//FUNCION = HOC

import { useEffect } from "react"

export const withLogging =(WrappedComponent)=> {
    //este es el nuevo componente que se crea
    const ComponentWithLogging = (props)=> {
        useEffect(()=>{
            console.log(`😱 ${WrappedComponent.name} se montó! `)
        },[])
        //Mostrar el componente original con todas sus props
        return <WrappedComponent {...props}/>
    }

    //retornar el nuevo componente
    return ComponentWithLogging

}