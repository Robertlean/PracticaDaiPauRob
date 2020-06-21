//funión suma
function suma(a, b){
    return a+b
}
// función resta
function resta(a, b){
    return a-b
}
//función multiplicar
function multiplicar(a, b){
    return a*b
}
//función dividir
function dividir(a, b){
    return a/b
}

//funcion callback
function calculadora(a, b, callback){
    return callback(a,b)
}

//Exportando el modulo calculadora
module.exports.calculadora = calculadora