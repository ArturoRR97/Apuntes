function diasEntreFechas(fecha1, fecha2) {
    const dia = 1000 * 60 * 60 * 24
    const diferencia = Math.abs(fecha1 - fecha2)
    return Math.floor(diferencia/dia)
}

const hoy = new Date ()
const nacimiento = new Date(1997,5,16)
