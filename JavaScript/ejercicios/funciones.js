var nombre = ['Arturo','Dario']

function imprimirNombreEnMayusculas(nombre) {
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

var Arturo = {
    nombre : 'Arturo',
    apellido : 'Rivas',
    ingeniero : false,
    estudiante : true,
    cocinero : true,
    musico : false
}

function queEs(persona) {
    console.log(`${persona.nombre} es:`)
    if(persona.ingeniero){
        console.log('es ingeniero')
    }
    if(persona.estudiante){
        console.log('es estudiante')
    }
    if(persona.cocinero){
        console.log('es cocinero')
    }
    if(persona.musico){
        console.log('es musico')
    }

}

queEs(Arturo)