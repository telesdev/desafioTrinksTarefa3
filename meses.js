const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

const exibeDescricao = () => {
    let num = prompt('Digite um número de 1 a 12 correspondente a um mês: ')
    num = parseInt(num)
    if(num < 1 || num > 12 || typeof num !== 'number') return console.log('Mês inválido, digite outro mês.')
    console.log(meses[num-1])
}

exibeDescricao()