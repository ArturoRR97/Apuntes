// const arturo = {
//     nombre: 'Arturo',
//     apellido: 'Rivas'
// }

// function saludar() {
//     console.log(`Hola, mi nombre es ${this.nombre}`)
// }

// const saludarAArturo = saludar.bind(arturo)

function saludar (saludo = 'Hola', nombre) {
    console.log(`${saludo}, soy ${nombre}`)
}

saludar(undefined,'Arturo')