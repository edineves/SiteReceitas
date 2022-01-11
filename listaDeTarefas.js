const criarTarefa = (evento) => {

    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')

    const conteudo = `<p class="content">${valor}<\p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoCloncluir())
    lista.appendChild(tarefa)
    input.value = " "
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)

const BotaoCloncluir = () => {
    const botaoCloncluir = documentElement('button')

    botaoCloncluir.classList.add('check-button')
    botaoCloncluir.innerText = 'concluir'

    botaoCloncluir.addEventListener('clic', () => {
        console.log('fui clicado')
    })

    return botaoCloncluir
}