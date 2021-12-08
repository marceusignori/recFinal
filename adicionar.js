let tarefas = []
localStorage.setItem('tarefas', JSON.stringify(tarefas))

function adicionar(){
    tarefas = JSON.parse(localStorage.getItem('tarefas'))

    let data = document.getElementById('data').value
    let descricao = document.getElementById('descricao').value

    tarefas.push({data, descricao})

    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}



