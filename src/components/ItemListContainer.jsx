const ItemListContainer = ({saludo, greeting})=> {
    // const {saludo}= props
    // console.log(props)
    console.log('ItemListContainer')
    return(
        <div>
            <h1>{saludo}</h1>
            <h2>{greeting}</h2>
        </div>
    )
}

export default ItemListContainer