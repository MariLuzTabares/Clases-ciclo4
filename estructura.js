const nombre ="Mari"
let edad = 26
let mensaje="";
if (edad<18){
    mensaje = nombre + " es menor de edad";
}else{
    mensaje=nombre + " es mayor de edad";
}
console.log(mensaje);
 //let info =document.write(mensaje);
let info = document.getElementById("dato") //trae la "cajita donde viene el texto" trae la variable, ingreso info y sale mensaje
info.innerHTML = mensaje;