const Saludo = ({nombre, curso, children})=>{
    // const {nombre, curso}= props
    // console.log(props)
    return(
        <>

        <h2>Hola {nombre}!</h2>
        {children}
        <h3>Bienvenido a {curso}!</h3>

        </>
    ) 
}

export default Saludo
