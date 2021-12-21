/*let nombreLogin  = prompt ("INGRESE SU NOMBRE PARA INGRESAR (tutor/profesor)")
if (nombreLogin.toLocaleLowerCase == "Diana" || "Rodrigo"|| "Bruno"|| "Laura") {
    alert ("1ER PASO COMPLETADO, CONTINUE")
}
else {
    alert ("TUTOR/PROFESOR NO IDENTIFICADO, INTENTE DE NUEVO")
}

let apellidoPassword = prompt ("INGRESE SU PASSWORD PARA INGRESAR (apellido de tutor/profeso)")
if (apellidoPassword.toLocaleLowerCase == "Mottura" || "Plutino"|| "Simone"||"Gonzalez") {
    alert ("2DO PASO COMPLETADO, BIENVENIDO") 
} 
else {
    alert ("PASSWORD INCORRECTO, INTENTE DE NUEVO")
    apellidoPassword = prompt ("INGRESE SU PASSWORD PARA INGRESAR (apellido de tutor/profeso)")
}
let nombre2 = document.getElementById ("nombre")
nombre2.innerText = nombreLogin*/



 const papa = {
    id:1,
    verdura: 'papa',
    precio: 10,
    proveedor: 'colombiano'}
const tomate = {
    id:2,
    verdura: 'tomate',
    precio: 20,
    proveedor: 'venezolano'}
const lechuga = {
    id:3,
    verdura: 'lechuga',
    precio: 30,
    proveedor: 'boliviano'}
const zanahoria = {
    id:4,
    verdura: 'zanahoria',
    precio: 30,
    proveedor: 'brasilero'}
const pepino = {
    id:5,
    verdura: 'pepino',
    precio: 50,
    proveedor: 'colombiano'}
const calabaza = {
    id:6,
    verdura: 'calabaza',
    precio: 20,
    proveedor: 'colombiano'}
const huevo = {
    id:7,
    verdura: 'huevo',
    precio: 120,
    proveedor: 'colombiano'}
    console.log (papa,tomate,lechuga,zanahoria,pepino,calabaza,huevo)


/*alert ("ABRA LA CONSOLA PARA VER LOS PRODUCTOS. DESEA SABER MAS INFO. ACERCA DE ALGUN PRODUCTO?")
const papa2 = {
    id:1,
    verdura: 'papa',
    precio: 10,
    proveedor:  'colombiano,COLUMBIANINDUSTRY since 1987',
    ubicacion: "Colombia,Bogota"
}
    
const tomate2 = {
    id:2,
    verdura: 'tomate',
    precio: 20,
    proveedor: 'venezolano,VENEZUELACERTICATED since 1997',
    ubicacion: "Venezuela, Guarico"
}
const lechuga2 = {
    id:3,
    verdura: 'lechuga',
    precio: 30,
    proveedor: 'boliviano, BOLIVIAAVALA since 2000',
    ubicacion: "Bolivia,Sucre"
}
const zanahoria2 = {
    id:4,
    verdura: 'zanahoria',
    precio: 30,
    proveedor: 'brasilero,BRASILFRUITS since 1950',
    ubicacion: "Brasil,Amapa"
}
const pepino2 = {
    id:5,
    verdura: 'pepino',
    precio: 50,
    proveedor: 'colombiano,COLUMBIANINDUSTRY since 1987',
    ubicacion:"Colombia,Bogota"
}
    
const calabaza2 = {
    id:6,
    verdura: 'calabaza',
    precio: 20,
    proveedor: 'colombiano,COLUMBIANINDUSTRY since 1987',
    ubicacion: "Colombia,Bogota"
}
const huevo2 = {
    id:7,
    verdura: 'huevo',
    precio: 120,
    proveedor: 'colombiano,COLUMBIANINDUSTRY since 1987',
    ubicacion: "Colombia,Bogota"
}*/

  

/*const productos= [papa2,tomate2,lechuga2,zanahoria2,pepino2,calabaza2,huevo2]
let idVerdura= parseInt (prompt("ingrese el id de la verdura que le interese/87 para dejar de buscar"))
while (idVerdura!=87){

  let verduraBuscada= productos.find(producto=>producto.id == idVerdura)
  console.log (verduraBuscada)
  idVerdura= parseInt (prompt("ingrese el id de la verdura que le interese/87 para dejar de buscar"))
 
}*/
 




/*let ingresarVerduras = prompt("INGRESE LAS VERDURAS QUE DESEA COMPRAR UNA POR UNA (hasta que aprete esc)")
let total = 0
while (ingresarVerduras != "ESC".toLowerCase()) {
    switch (ingresarVerduras) {
    case "pepino": total= total+50
    break
    case "tomate": total=total+20
    break
    case "lechuga": total=total+30
    break
    case "zanahoria":total=total+30
    break
    case "pepino":total=total+50
    break
    case "calabaza" :total = total+20
    break
    case "huevo" :total = total+120
    break
    case "papa":total= total+10
    break
    default : alert ("INGRESE ALGUNA VERDURA")}

    
    console.log ("TOTAL = " + total)
console.log ("El usuario ingreso "+ ingresarVerduras)
ingresarVerduras= prompt("INGRESE LAS SIGUIENTES VERDURAS QUE DESEA COMPRAR (hasta que aprete esc)")

}*/


let precioTotal = total
if (total>=250){
   let beneficio = document.createElement ("p") 
   beneficio.innerText = "FELICIDADES, GRACIAS A SU COMPRA DE MAS DE $250 OBTENDRA BENEFICIOS EXCLUSIVOS EN SUS PROXIMAS COMPRAS"
   document.body.appendChild (beneficio)
}
else {}

/*alert ("SI USTED PAGA CON TARJETA CODERBANK, OBTENDRA UN 10%")

let tarjeta = prompt("USTED TIENE ESA TARJETA?")
let diezprociento = precioTotal*0.10

const descuento = function (a,b) {return a - b };

switch (tarjeta) {
    case "si":
        alert ("EL MONTO A PAGAR ES DE "+(descuento (precioTotal,diezprociento)))
        break;
    case "no":
        alert ("EL MONTO A PAGAR ES " + precioTotal)
        break;
    default: 
    alert ("INGRESE UNA RESPUESTA")
    break;
}
alert ("SI QUIERE CONTINUAR CON LA COMPRA CREE UNA CUENTA A CONTINUACION")
*/

/*let nombre = prompt("INGRESE SU NOMBRE")
let surname = prompt ("INGRESE SU APELLIDO")
let number = parseInt (prompt("INGRESE SU NUMERO DE TELEFONO"))
let cumpleanios = parseInt (prompt("INGRESE SU FECHA DE NACIMIENTO"))
let calle = prompt ("INGRESE SU DIRECCION")
const usuario1 = new comprador (nombre,surname,number,cumpleanios,calle)
console.log (usuario1)*/

let buton= document.getElementById ("infoBTN")
buton.addEventListener ("click", prosedencia)
function prosedencia (){
    console.log (papa.verdura+" "+papa.proveedor)
    console.log (tomate.verdura+" "+tomate.proveedor)
    console.log (lechuga.verdura+" "+lechuga.proveedor)
    console.log (zanahoria.verdura+" "+zanahoria.proveedor)
    console.log (pepino.verdura+" "+pepino.proveedor)
    console.log (calabaza.verdura+" "+calabaza.proveedor)
    console.log (huevo.verdura+" "+huevo.proveedor)
}
    

    
    
    
        