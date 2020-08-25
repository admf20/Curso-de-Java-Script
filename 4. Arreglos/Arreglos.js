
let arreglo = ['Ruby','java','Java-Script','c#'];

//eliminar Ruby con filter
arreglo = arreglo.filter(function(el){
  return el != 'Ruby';
});

//eliminar Ruby y utilizando la funcion flecha
arreglo = arreglo.filter((el)=> el != 'Ruby');

arreglo.forEach(function(elemento){
    console.log(elemento); 
});

//utilizando el metodo find
let el = arreglo.find(el => el == 'Ruby');
console.log(el);
_______________________________________________________________________________________________

let numeros = [23,4,24,2,1,5,2];

//utilizando metodo map con arreglos
let cuadrados = numeros.map(numero => numero * numero);
console.log(cuadrados);

let cuadrados = numeros.map(numero => numoro / (numero2 * (numero / numero)));