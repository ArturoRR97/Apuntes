function crearSaludo(finalDeFrase) {
    return function (nombre) {
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('güey')
const saludoColombiano = crearSaludo('parse')

saludoArgentino('Arturo') // Hola Arturo che
saludoMexicano('Arturo') // Hola Arturo güey
saludoColombiano('Arturo') // Hola Arturo parse