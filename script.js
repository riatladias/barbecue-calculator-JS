// carne - 400gr por pessoa + de 6 horas - 650
// cerveja - 1200ml por pessoa + 6 horas - 2000ml
// refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml
// crianças valem po 0,5

// Coleta dos dados de entrada
let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('tempo')
let res = document.getElementById('resultado')

// Função que ira calcular os dados e mostrar o resultado
function calcular() {
    
    // Verificando se os campos estão vazios.
    if (inputAdultos.value.length == 0 || inputCriancas.value.length == 0 || inputDuracao.value.length == 0) {
        alert('Insira os dados e tente novamente!')
    } else {
        let criancas = Number(inputCriancas.value)
        let adultos = Number(inputAdultos.value)
        let duracao = Number(inputDuracao.value)

        let quantCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
        let quantCerva = cervejaPP(duracao) * adultos
        let quantRefriAgua = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas)

        res.innerHTML = `<p>${quantCarne / 1000}kg de carne.</p>`
        res.innerHTML += `<p>${Math.ceil(quantCerva / 355)} latas de Cerveja.</p>`
        res.innerHTML += `<p>${Math.ceil(quantRefriAgua / 2000)} Pet's de 2l de Bebidas (Refrigerantes e Água).</p>`
    }
}
// função para comparar o tempo se 6hs ou mais (carne)
function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}

// função para comparar o tempo se 6hs ou mais (cerveja)
function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}

// função para comparar o tempo se 6hs ou mais (Refrigerante/Agua)
function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}