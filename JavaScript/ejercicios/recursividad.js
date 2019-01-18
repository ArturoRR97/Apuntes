/* Algoritmo de la división entera
13 / 4

13 - 4 = 9  |    1
09 - 4 = 5  |    1
05 - 4 = 1  |    1
01 - 4 = -3 |_____+
            13/4=3
*/
function divisionEntera(dividendo, divisor) {
    if(dividendo<divisor){
        console.log('base');
        return 0
    }
    console.log('paso');
    return 1 + divisionEntera(dividendo-divisor,divisor)

}