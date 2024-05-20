const Producto = function(nombre,precio,cantidad){
    this.nombre = nombre
    this.precio = precio
    this.cantidad = cantidad
}

let producto1 = new Producto ("TEQUILA", 150000, 25)
let producto2 = new Producto ("GUARILAQUE", 150000, 55)
let producto3 = new Producto ("RON", 250000, 5, 27)
let producto4 = new Producto ("VODKA", 180000, 55)

const lista = [producto1,producto2,producto3,producto4]

function filtrarProducto(){
    let productoabuscar = prompt("ingrese la botella que quieras comprar, tenemos TEQUILA,GUARILAQUE,RON Y VODKA").trim()
    if (productoabuscar.length>2){
    }else{
     alert("Has ingresado algo mal")
        }
        
  
        
       

    let [producto] = lista.filter( (elementolista)=>elementolista.nombre == productoabuscar.toUpperCase()      )
    console.log(producto)
    

    


    consultarPrecioTotal(producto)


function consultarPrecioTotal(producto){
    let cantidadmultiplicar = prompt("cantidad de botellas que quieres comprar").trim()
    verificarCantidadDeBotellas(producto.cantidad, cantidadmultiplicar )
   let precioTotal = producto.cantidad*producto.precio
   alert("el precio total es " +precioTotal )
   
   
   
}    

function verificarCantidadDeBotellas(CantidadDeStock,cantidadDebotellasParaComprar){
    if(CantidadDeStock < cantidadDebotellasParaComprar){
        alert("Papi no hay tanto")
         throw new Error("error")
    }
}
}