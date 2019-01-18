function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    this.saludar = () => console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
    return this.altura > 1.7
}

function Desarrollador() {
}

var arturo = new Persona('Arturo','Rivas',1.75)
arturo.saludar()
console.log(arturo.soyAlto())
var alin = new Persona('Alin','Carbajal',1.7)
alin.saludar()
console.log(alin.soyAlto())
