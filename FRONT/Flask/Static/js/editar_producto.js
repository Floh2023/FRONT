function modificar() {
    let id = document.getElementById("id").value
    let nombre_ingresado = document.getElementById("nombre").value
    let precio_ingresado = document.getElementById("precio").value 
    let stock_ingresado = document.getElementById("stock").value 
    let talle_ingresado = document.getElementById("talle").value
    let lote_ingresado = document.getElementById("lote").value
    let fecha_ingresado = document.getElementById("fecha").value
    let imagen_ingresada = document.getElementById("imagen").value 

    let datos = {
        nombre: nombre_ingresado,
        precio:precio_ingresado,
        stock:stock_ingresado,
        talle:talle_ingresado,
        lote:lote_ingresado,
        fecha:fecha_ingresado,
        imagen:imagen_ingresada
    }

    console.log(datos);

    let url = "https://diamondshoes.pythonanywhere.com/update/"+id
    var options = {
        body: JSON.stringify(datos),
        method: 'PUT',
        
        headers: { 'Content-Type': 'application/json' },
        // el navegador seguirá automáticamente las redirecciones y
        // devolverá el recurso final al que se ha redirigido.
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")

            //Puedes utilizar window.location.href para obtener la URL actual, redirigir a otras páginas
           window.location.href = "../tabla_productos.html";
          
        })
        .catch(err => {
            this.error = true
            console.error(err);
            alert("Error al Modificar")
        })      
}