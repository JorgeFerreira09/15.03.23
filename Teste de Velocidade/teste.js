const velocidadeA = prompt("Informe a velocidade do carro A:")
const velocidadeB = prompt("Informe a velocidade do carro B:")

if (velocidadeA > velocidadeB) {
    alert("O carro A é mais veloz que o B.")
} else if (velocidadeA == velocidadeB){
    alert("O carro A tem a mesma velocidade que o carro B.")
} else if (velocidadeA < velocidadeB) {
    alert("O carro B é mais veloz que o A.")
} else {
    alert("erro!")
}



