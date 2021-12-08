function lista(){
    let tarefas = JSON.parse(localStorage.getItem('tarefas'))

    let container = document.getElementById('conteudo')

    for (let index = 0; index < tarefas.length; index++) {
        container.innerHTML += `<div id="infos"><p>${tarefas[index].data} - ${tarefas[index].descricao}</p></div>`
    }
}

lista()
