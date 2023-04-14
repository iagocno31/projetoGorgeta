const calcularBtn = document.querySelector('#submit')
calcularBtn.addEventListener('click', submit)

function submit() {
    const result = document.querySelector('#result').value
    const people = document.querySelector('#people').value
    const porcentagem = document.querySelector('#porcentagem').value

    if (!result || !people) {
        alert('Campos Vazios.')
    } else {
        const number = (result * (porcentagem / 100)) / people

        const result = document.querySelector('#valor-gorgeta')
        result.innerText(1) = 'R$' + number.toFixed(2)
    }        
}