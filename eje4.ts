type MyUnion ={
    nombre : string;
    apellido: string;

} | {
peso : number;
altura: number;
};

let x: MyUnion = {nombre: "pepito", apellido: "perez"};
x = {peso: 85, altura: 1.89};