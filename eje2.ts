function number(numeros: number){
    switch (numeros){
        case 1:
            console.log("es el numero 1");
    break;
    case 2:
        console.log("el numero 2");
        break;
 case 3: 
        console.log("numero 3");
 break;
 case 4:
    console.log("numero 4");
    break;
case 5: 
console.log("el numero 5");    
default:
    throw new Error("numero incorrecto");
}
   }

number(1); // imprime "es el numero 1"