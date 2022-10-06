//alert("Hola Mundo");

var nombre = "luz"; //ya no se usa
let edad= 26;
const nombre2 ="Mari"//constantes
console.log(nombre2+" " +nombre+" tiene "+edad+" años ");
let nombres =["Mari","Luz"];
nombres[2]="Pedro";

var variable_1 ="Hola Mundo"
var variable_2 = 1
var variable_2 =variable_2+10
console.log(variable_2);
var variable_3=variable_2+"1"
console.log(variable_3);

delete nombres [1]
console.log(nombres);
nombres.push("tabares")
console.log(nombres);
nombres [1]="Luz";
console.log(nombres);
//en  operadores lógicos intentar usar siempre el mismo tipo de variable
var menor =1<3
var menorString="35"<32;
console.log(menor);
console.log(menorString);

var menorIgual= 0<=1
console.log(menorIgual);
var menorIgualString= "1"<=1
console.log(menorIgualString);


if(1!=1){
    alert("Esto es verdadero");
}else if(2==2){
    alert("Esto es verdadero x 2");
}
else{
    alert("esto es falso")
}