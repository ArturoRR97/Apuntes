// console.log('a')
// //setTimeout(función, delay ms)
// setTimeout(()=>console.log('b'),0)
// console.log('c')

// setTimeout(()=>console.log('d'),2000)
// for(var i = 0; i < 100000;i++){}

const URL_API = 'https://swapi.co/api/people/'
const onResponse = function(character) {
    console.log(`Hola yo soy ${character.name}`)
}
// var luke = `${URL_API}people/1`
var opts = { crossDomain: true }

// function obtenerPersonaje(id) {
//     const url = `${URL_API}${id}`
//     $.get(url, opts, onResponse)
// }

// obtenerPersonaje(1)
// obtenerPersonaje(2)
// obtenerPersonaje(3)

// function obtenerPersonaje(id,callback) {
//     const url = `${URL_API}${id}`
//     $.get(url, opts, function(character) {
//         console.log(`Hola yo soy ${character.name}`)
//         if(callback){
//             callback()
//         }
//     })
// }
// // callback hell
// obtenerPersonaje(1, ()=>obtenerPersonaje(2,()=>obtenerPersonaje(3,()=>obtenerPersonaje(4,()=>obtenerPersonaje(5,()=>obtenerPersonaje(6))))))

// function obtenerPersonaje(id,callback) {
//     const url = `${URL_API}${id}`
//     $
//     .get(url, opts, callback)
//     .fail(()=> console.log(`No se puedo obtener el personaje ${id}`))
// }
// obtenerPersonaje(1, character => {
//     console.log(`Hola yo soy ${character.name}`)
//     obtenerPersonaje(2, character => {
//         console.log(`Hola yo soy ${character.name}`)
//         obtenerPersonaje(3, character => {
//             console.log(`Hola yo soy ${character.name}`)
//             obtenerPersonaje(4, character => {
//                 console.log(`Hola yo soy ${character.name}`)
//                 obtenerPersonaje(5, character => {
//                     console.log(`Hola yo soy ${character.name}`)
//                 })
//             })
//         })
//     })
// })


function obtenerPersonaje(id) {
    return new Promise((resolve,rejected) => {
        const url = `${URL_API}${id}`
        $
        .get(url, opts, data => resolve(data))
        .fail(() => rejected(id)) 
    })
}

async function obtenerPersonajes() {
    var ids = [1,2,3,4,5,6]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(promesas)
        console.table(personajes)
    } catch (id) {
        console.log(`Ocurrio un error al obtener el personaje ${id}`)
    }
}

obtenerPersonajes()

// obtenerPersonaje(1)
// .then( character => {
//     console.log(`Hola soy ${character.name}`)
//     return obtenerPersonaje(2)
// })
// .then( character => {
//     console.log(`Hola soy ${character.name}`)
//     return obtenerPersonaje(3)
// })
// .then( character => {
//     console.log(`Hola soy ${character.name}`)
//     return obtenerPersonaje(4)
// })
// .catch( id => console.log(`Ocurrio un error al obtener el personaje ${id}`))
