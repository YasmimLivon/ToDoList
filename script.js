// Definir constantes para uso no código
const btnadd = document.getElementById('btn-add');
const tarefa = document.getElementById('tarefa');
const tasklist = document.getElementById('tasklist');
const titulo = document.getElementById('titulo');

let nome = prompt("Qual o seu nome?")
tarefa.focus();
titulo.innerHTML = `Lista de tarefas: ${nome}`;

btnadd.addEventListener("click", criatarefa);
// Envio com enter
tarefa.addEventListener('keypress', function(e) {
    if (e.key === 'Enter')criatarefa();
});

function criatarefa(){
    if (tarefa.value==""){
        alert("digite o nome da sua tarefa")
    }
    else{
    
  const listItem = document.createElement('li')
    listItem.textContent = tarefa.value;
    tasklist.appendChild(listItem);
    const removebutton = document.createElement('button');
    removebutton.id = "remove"
    removebutton.textContent = "x"
    removebutton.addEventListener("click", function(){
        tasklist.removeChild(listItem);
    })
    const concluirbutton = document.createElement('button');
    concluirbutton.id = "conclui"
    concluirbutton.textContent = "✓"

    let buttonsItem = document.createElement('div');
    buttonsItem.classList.toggle('buttonsItem')
    listItem.appendChild(buttonsItem);
    buttonsItem.appendChild(concluirbutton);
    buttonsItem.appendChild(removebutton);

    concluirbutton.addEventListener("click", function(){
        listItem.classList.toggle("completed")
    })

    // apaga input após o envio
    tarefa.value = '';
    tarefa.focus();  
    // retorna o foco para o campo de entrada
}
}
