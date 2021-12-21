//INGRESANDO LOS DATOS DE CADA PROVEEDOR MEDIANTE JQUERY Y EVENTOS
$("#infoColombia").click (function(){
$("#colombia").fadeToggle("slow")
})
$("#infoBrasil").click (function(){
    $("#brasil").fadeToggle("slow")
    })
$("#infoBolivia").click (function(){
     $("#bolivia").fadeToggle("slow")
    })
$("#infoVenezuela").click (function(){
    $("#venezuela").fadeToggle("slow")
     })
//OBTENIENDO CLASIFICACION DEL USUARIO Y GUARDANDOLA EN LOCALSTORAGE (simulando una base de datos)
     $("#yes").click (
     function (){
        sessionStorage.setItem ("calificacion","buena")
    }
     )

     $("#no").click(function(){
        $("#badcalification").append (`
        <input type="text" id="opinion" placeholder="que deberiamos mejorar?">
        <button id="send' class="btn btn-light">enviar</button>
        `)})
        
        
     

      //$("#enviar").click ( localStorage.setItem ("calificacion mala",$("#bad").val()))  
      /*<input id= "bad" type="text" placeholder= "ingrese en que deberia mejorar esta pagina informativa"
      <button id="enviar">ENVIAR</button>*/
      //$("#send").click ( sessionStorage.setItem ("calificacion mala",$("#bad").val()))
      //`<input id= "bad" type="text" placeholder= "que deberia mejorar?"`

      //OBTENIENDO DATOS DEL AJAX
      
         const URLREAL= "https://api-dolar-argentina.herokuapp.com/api/real/nacion"
         $.ajax({
            method: "GET",
            url: URLREAL,
            success: function (data) {
                $("#cotreal").append (`<h4>REAL COMPRA:$ ${data.compra}</h4>`)
            }
         })

        /*const URLBOLIVIANO = "cotizacionbolivia.json"
        $.ajax({
            method: "GET",
            url: URLBOLIVIANO,
            success: function hola (data) {
                $("body").append (`<h4>BOLIVIANO COMPRA:$ ${data.compra}</h4>`)
                console.log (hola)
            }
         })*/
         $.getJSON("cotizaciones.json", function (respuesta, estado) {
            if(estado === "success"){
              let misDatos = respuesta;
              for (const dato of misDatos) {
                $("#cotcol").prepend(`
                                        <h4>PESO COLOMBIANO COMPRA:$${dato.compra}</h4>
                                     `)
              }  
            }
            })
          

                $.getJSON("cotizacionbolivia.json", function (respuesta, estado) {
                    if(estado === "success"){
                      let misDatos = respuesta;
                      for (const dato of misDatos) {
                        $("#cotbol").prepend(`
                                                <h4>PESO BOLIVIANO COMPRA:$${dato.compra}</h4>
                                             `)
                      }  
                    }
                    })
                    $.getJSON("cotizacioncolombia.json", function (respuesta, estado) {
                        if(estado === "success"){
                          let misDatos = respuesta;
                          for (const dato of misDatos) {
                            $("#cotven").prepend(`
                                                    <h4>BOLIVARES COMPRA:$${dato.compra}</h4>
                                                 `)
                          }  
                        }
                        })