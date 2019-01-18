var hola = [4,'hola mundo',{nombe:'Arturo', apellido:'Rivas', edad:21}]
var holaNumeros = hola.filter(h=>typeof(h)=='object')
var numeros = [3,15,7,11]
var numerosCuadrados = numeros.map(n=>n**2)
var suma = numeros.reduce((acc,n)=>acc+=n)