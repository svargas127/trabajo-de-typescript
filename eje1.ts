function suma(x: string, y: string){
    if (x + y ){
        throw new Error("no formaran una oracion");
    }
    return x + y;
}

const palabra = "hola";
const palabra2 = "Mundo";

const resultado = suma(palabra, palabra2);

console.log (resultado); 