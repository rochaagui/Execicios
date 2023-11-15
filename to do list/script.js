const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const ListaCompleta = document.querySelector('.list-task')

let MinhaLista = []

function AdicionarNovaTarefa(){
    MinhaLista.push({
        tarefa: input.value,
        concluida: false

    })

    input.value = ''

    MostrarTarefa ()
}

function MostrarTarefa(){

    let NovaLi = ''

    MinhaLista.forEach((item, lugar) => {
 
        NovaLi = NovaLi + `

    <li class="task class ${item.concluida && "done"}">
        <img src="./img/checked.png" alt="OK-na-tarefa" onclick="tarefaConcluida(${lugar})">
        <p>${item.tarefa}</p>
        <img src="./img/trash.png" alt="delete-tarefa" onclick="DeletarTarefa(${lugar})">
    </li>

        `
    })

    ListaCompleta.innerHTML = NovaLi

    localStorage.setItem('Lista', JSON.stringify(MinhaLista))

}

function tarefaConcluida(lugar){
    MinhaLista[lugar].concluida = !MinhaLista[lugar].concluida

    MostrarTarefa()

}

function DeletarTarefa(lugar){
    MinhaLista.splice(lugar, 1)
    MostrarTarefa()

}

function SalvarTarefas(){
    const tarefasdolocalstorage = localStorage.getItem('Lista')

    if (tarefasdolocalstorage) {
    MinhaLista = JSON.parse(tarefasdolocalstorage)
    }

    MostrarTarefa()

}

SalvarTarefas()

button.addEventListener('click', AdicionarNovaTarefa)