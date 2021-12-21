//ESTABLEZCO EL ARRAY CARRITO
let carro = []
let elementosComprados = document.createElement ("h2")
elementosComprados.innerText = "Sus elementos comprados son"
document.body.appendChild (elementosComprados)
//ESTABLEZCO EL TOTAL EN UN H2
let TotalCompra = document.createElement("h2");
TotalCompra.innerText = "TOTAL= ";
document.body.appendChild(TotalCompra)
//CREO EL BOTON FINALIZAR COMPRA
let botonFinalizarCompra = document.createElement("button")
botonFinalizarCompra.innerText = "FINALIZAR COMPRA"
document.body.appendChild(botonFinalizarCompra)

botonFinalizarCompra.onclick = () => {
    const finalprice= TotalCompra.innerText
    alert ("SU COMPRA ESTA FINALIZANDO, DEBE ABONAR $ " + finalprice)
    
}
//CREO UN OBJETO CONSTRUCTOR SIMULANDO SER UNA CUENTA, OBTENIENDO DATOS MEDIANTE INPUTS
class comprador {
    constructor (nombre, telefono, fechaDeNacimiento, direccion){
        this.nombre = nombre
        this.telefono = telefono
        this.fechaDeNacimiento = fechaDeNacimiento
        this.direccion = direccion}
    }

    const save = (a, b) => { sessionStorage.setItem(a, b) }

//ESTABLEZCO ARRAY DE OBJETOS
const productes = [{

    id:1,
    verdura: 'papa',
    precio: 10,
    proveedor: 'colombiano', 
    foto: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2019/09/papa.jpg?resize=1080%2C608&quality=80&ssl=1"
},
    
    {id:2,
    verdura: 'tomate',
    precio: 20,
    proveedor: 'venezolano',
foto:"https://agroactivocol.com/wp-content/uploads/2020/07/Tomate-Corona-1.jpg"},
 {
    id:3,
    verdura: 'lechuga',
    precio: 30,
    proveedor: 'boliviano',
foto:"https://media.istockphoto.com/photos/lettuce-isolated-isolated-on-white-background-picture-id181072765?k=20&m=181072765&s=612x612&w=0&h=8gpOrTTz71R9QgfP64ALOCNFW8Pat5arsVzDQamOu5k="},
  {
    id:4,
    verdura: 'zanahoria',
    precio: 30,
    proveedor: 'brasilero',
foto:"https://soycomocomo.es/media/2019/03/zanahorias.jpg"},
 {
    id:5,
    verdura: 'pepino',
    precio: 50,
    proveedor: 'colombiano',
foto:"https://st2.depositphotos.com/1494134/7007/v/600/depositphotos_70075971-stock-illustration-cucumber-and-slice-isolated-on.jpg"},
{
    id:6,
    verdura: 'calabaza',
    precio: 20,
    proveedor: 'colombiano',
foto:"https://static.libertyprim.com/files/familles/potiron-large.jpg?1569317112"},
 {
    id:7,
    verdura: 'huevo',
    precio: 120,
    proveedor: 'colombiano',
foto:"https://mejorconsalud.as.com/wp-content/uploads/2018/09/huevos-gallina-768x512.jpg"}]
//CREO LOS OBJETOS EN EL HTML MEDIANTE DOM
    for (const prod of productes){
        let div= document.createElement ("div")
       div.innerHTML = `<ul class=" list-group list-group-horizontal"> 
        <li class="list-group-item"  >
        <h3> <b> ID : </b> ${prod.id}</h3> 
        <h2><mark> VERDURA: ${prod.verdura}</mark></h2>
        <img src="${prod.foto}" width="250px" height="250px">
        <h3> PRECIO= $ ${prod.precio} </h3>
        <button id= "${prod.id}"> AGREGAR A LA COMPRA</button>
        </li> </ul>`
        save(prod.id,JSON.stringify (prod.verdura))
        document.body.appendChild (div)
        document.getElementById (prod.id).onclick = () => {
            agregarAlCarrito (prod)
        }
        }
        //let div= document.createElement ("div")
       // div.innerHTML =
       //CREO UNA TABLA PARA QUE EL USUARIO VEA LOS PRODUCTOS INGRESADOS
const agregarAlCarrito = (aidi) => {
carro.push (productes [aidi.id - 1])
$("#tablabody").append(`
            <tr id='fila${aidi.id}'>
            <td> ${aidi.id} </td>
            <td> ${aidi.verdura}</td>
            <td> ${aidi.proveedor}
            <td> ${aidi.precio}</td>
            <td> <button id="${aidi.id - 1}" class='btn btn-danger'>ELIMINAR</button>`)
document.getElementById (aidi.id-1).onclick = () => {console.log ("hola") }
console.log (carro)
totalCarrito ()
}

//SUMANDO EL TOTAL
 function totalCarrito () {
let total1 = 0
let prods2 = []
for (const prods of carro) {
    total1 += prods.precio
    console.log (total1)
    prods2.push (prods.verdura)
   
}

TotalCompra.innerText = "TOTAL = " + total1
if (total1>=250){
    $("#beneficio").empty()
    $("#beneficio").append (`<p> GRACIAS A QUE SU COMPRA SUPERO LOS $250, USTED TIENE 10% DE DESCUENTO</p>
    `)}    

 }
 //SI EL USUARIO DESEA CREAR UNA CUENTA PUEDE HACERLO MEDIANTE ESTOS INPUTS
 $("#botonAccount").click (function crear (){
    $("#formularioCuenta").prepend (`
    <input id= "name1" type="text" placeholder= "ingresa tu nombre">
    <input id= "edad" type="number" placeholder= "ingresa tu edad">
    <input id= "tel" type="number" placeholder= "ingresa tu numero de tel">
    <input id= "calle" type="text" placeholder= "ingresa tu calle">
    
    `)
    
})


   
//$(".back").css({ background: "gray", color: "black" })



$("#formularioCuenta").prepend('<button id="btn1">CREAR</button>');



$("#btn1").click(function () { 
    let nombre3= $("#name1").val()
    let tel= $("#tel").val()
    let edad= $("#edad").val()
    let localidad= $("#calle").val()
    //LOS DATOS INGRESADOS SE GUARDARAN EN ESTE OBJETO CONSTRUCTOR Y SE CONSOLOGEARA
    const usuario1 = new comprador (nombre3,tel,edad,localidad)
console.log (usuario1)
return nombre3
})

//let jeyson= JSON.stringify (usuario1)


