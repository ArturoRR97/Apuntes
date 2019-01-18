class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn) {
        var {nombre,apellido} = this
        console.log(`Hola me llamo ${nombre} ${apellido}`)
        if(fn) {
            fn(nombre, apellido, false)
        }
    }
    soyAlto() {
        return this.altura > 1.8
    }
}
class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar(fn) {
        var {nombre,apellido} = this
        console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrolador`)
        if(fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responder(nombre, apellido, dev) {
    console.log(`Buenos dias ${nombre} ${apellido}`)
    if(dev){
        console.log(`No sabia que eras desarrollador`);
        
    }
}

var army = new Persona('Armando','Rivas',1.85)
var arturo = new Desarrollador('Arturo','Rivas',175)

army.saludar(responder)
arturo.saludar(responder)