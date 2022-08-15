
let nombre = prompt("Indique su nombre completo");
let tiempo = parseInt(prompt("¿Que cantidad de minutos jugó el sabado?"));
let hielo = prompt("¿Hizo hielo post partido? Si o no");
let pileta = prompt("¿Hizo pileta de recuperación el domingo?");

if (tiempo > 70 && hielo == ("no"||"No"||"NO") && pileta == ("no"||"No"||"NO")){
    console.log("Estimado ",nombre, "su tiempo de juego es muy alto y debera realizar de manera obligatoria hielo el dia lunes y un entrenamiento adaptado.");
}
else if (tiempo>70 && (hielo == ("no"||"No"||"NO") || pileta == ("no"||"No"||"NO"))){
    console.log("Estimado ", nombre, "Su tiempo de juego es muy alto y debera realizar un entrenamiento adaptado.");
}
else if (tiempo<70 && hielo == ("no"||"No"||"NO") && pileta == ("no"||"No"||"NO")){
    console.log("Estimado ",nombre,"el dia lunes puede entrenar normalmente pero prestar especial atención a la fatiga muscular");
}
else if (tiempo<70 && (hielo == ("si"||"Si"||"SI") || pileta == ("si"||"Si"||"SI"))){
    console.log("Estimado ",nombre, "su tiempo de juego es normal y su recuperacion es buena. Puede entrenar normalmente!");
}
else if(tiempo<70 && hielo == ("si"||"Si"||"SI") && pileta == ("si"||"Si"||"SI")) {
    console.log("Estimado ",  nombre, ", su recuperación es óptima. Puede entrenar normalmente!");
}
else {
    console.log("Estimado ",nombre, "consulte con los entrenadores y kinesiologos sobre su situación.");
}