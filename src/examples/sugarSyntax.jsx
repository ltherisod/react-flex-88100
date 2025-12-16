// Spread Operator (...)

const numeros = [ 1,2,3]

const nuevosNumeros = numeros.concat([4,5,6]) //[1,2,3,4,5,6]

const numerosSugar = [...numeros, 4,5,6,7,8,9]

const compra = {
    name: 'Palito de la selva'
}

const compraSugar = {...compra, precio: 1000}


//Destructuring

const colores =['azul', 'rojo', 'lila']

const colorRojo = colores[1] //rojo

const [primer, segundo]=colores
console.log(primer)// azul 
console.log(segundo)// rojo

const persona = {
    nombre:'Juan',
    ciudad:'Bariloche',
    edad:35
}

const nombre = persona.nombre //Juan


const {edad}= persona


//Operador Ternario

let mensaje;

if(edad >= 18){
    mensaje = 'Sos mayor de edad'
}else{
    mensaje= 'Sos menor de edad'
}

const mensajeSugar = edad >= 18 ? 'Sos mayor de edad' : 'Sos menor de edad'

function sumar (a,b){
    return a + b
}

const sumarSugar = (a,b) => {
    //logica
    return a+b
}

const superSugar = (a,b)=> a+b

// const superSugar = (a,b)=> (
//     a+b
// )