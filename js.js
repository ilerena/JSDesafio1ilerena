

let sesiones = parseInt(prompt("¿Cuantas sesiones desea realizar?"));
let descanso = parseInt(prompt("¿Cada cuantos dias quiere repetir la sesión?"));
let dia1 = parseInt(prompt("Indique el dia de su primera sesión "));


for (i=0;i<sesiones;i++){
    let distancia = (dia1)+(descanso*i);
    let mes = "";
    if (distancia>90){
        console.log("Esta solicitando un turno con demasiada anticipación. Llegada la fecha solicite turnos nuevamente.");
        break;
    }
    else if (distancia>60){
        distancia=distancia-60;
        mes="del mes siguiente al proximo.";
    }
    else if (distancia>30){
        distancia = distancia-30;
        mes = "del siguiente mes.";
    } 
    else {
        mes = "de este mes.";
    }
    console.log("Sesion N° ",i+1," el día:", distancia, mes);
}