//1) Crear una promesa que después de 5 segundos, muestre un mensaje.

// const saludo= new Promise((resolve, reject)=>{
//     setTimeout(resolve,50000)
// }
// )
// .then(()=>alert("Bienvenido a nuestra pagina!!"))

//2 Crear una promesa que después de 1 segundo muestre un mensaje, y al resolverse, que en 2 segundos muestre otro mensaje y que finalmente a los 4 segundos muestre un ultimo mensaje.

// const saludo= new Promise((resolve, reject)=>{
//     setTimeout(resolve, 1000)     
// }
// )

// .then(()=>console.log("usted esta siendo saludado"))


//3)Para reducir costos, en un boliche en lugar de patovas, tienen ahora un robot que lee el DNI. Si la persona es mayor de 18, puede pasar, sino no.

const info= document.querySelector("#numero")
let edad;

let edadObtenida= ()=>{     //obtengo el valor del input
    edad= info.value
    console.log("valor edad " + edad)  //muestro la edad en consola

}

    if(edad<18){   // las promesas van dentro del if
        const mayorEdad= new Promise()
}
