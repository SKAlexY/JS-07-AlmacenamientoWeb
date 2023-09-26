/*
API de amacenamiento web 

Nos permite almacenar informacion en nuestro navegador, de dos formas:

   - local (persistencia de los datos)
   - sesion (los datos son volatiles)

Tanto el almacenamiento local como el de sesion, proporcionan un area privada para tratar sus datos, esto quiere decir 
*/

/*
Almacenamiento local (localStorage)

La informacion que pongamos en un almacenamiento local se guarda indefinidamente hasta que sea eliminada por codigo o borrada del navegador.

casos de uso: articulos de un carrito de compras, guardamos un perfil de configuracion, historial de uso.
*/

//Guardando mi primer dato en localStorage

//localStorage.setItem(key, value)

localStorage.setItem("Nombre", "Felipe");
localStorage.setItem("Apellido", "Maqueda");
localStorage.setItem("Edad", "31");

//Guardando un carrito de compras 
let carritoComprasFelipe = ["Sabritones", "Cocacola", "Chicles", "Tortillas"];

localStorage.setItem("CarritoCompras", carritoComprasFelipe);

//Obtener la informacion almacenada en mi localStorage

//localStorage.getItem(key);
let apellido = localStorage.getItem("Apellido");
console.log(apellido);

//recuperando el carrito
let carrito = localStorage.getItem("CarritoCompras");
console.log(carrito);

//borrar un elemento del localStorage
//localStorage.removeItem(key)
localStorage.removeItem("CarritoCompras");


//Conocer el largo o longitud del localStorage
//localStorage.length
let longitudLocalStorage = localStorage.length;
console.log(longitudLocalStorage);

//Para modificar datos con set
localStorage.setItem("Apellido", "Gonzales");
