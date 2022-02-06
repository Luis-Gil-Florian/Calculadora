function cero() {
    document.calculadora.ans.value+='0'
}

function uno(){
    document.calculadora.ans.value+='1'
}

function dos() {
    document.calculadora.ans.value+='2'
}

function tres() {
    document.calculadora.ans.value+='3'
}

function cuatro() {
    document.calculadora.ans.value+='4';
}

function cinco() {
    document.calculadora.ans.value+='5'
}

function seis() {
    document.calculadora.ans.value+='6'
}

function siete(){
    document.calculadora.ans.value+='7'
}

function ocho() {
    document.calculadora.ans.value+='8'
}

function nueve() {
    document.calculadora.ans.value+='9'
}

function punto() {
    document.calculadora.ans.value+='.'
}

function suma() {
    document.calculadora.ans.value+='+'
}

function resta() {
    document.calculadora.ans.value+='-'
}

function multiplicacion() {
    document.calculadora.ans.value+='*'
}

function division() {
    document.calculadora.ans.value+='/'
}

function eliminar() {
    let numero = Math.round(document.calculadora.ans.value / 10);
    document.calculadora.ans.value = numero - 1  ;
}

function igual() {
    document.calculadora.ans.value=eval(document.calculadora.ans.value)
}