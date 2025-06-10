// Definir constantes para uso no código
const btnadd = document.getElementById('btn-add');
const tarefa = document.getElementById('tarefa');
const tasklist = document.getElementById('tasklist');
const titulo = document.getElementById('titulo');

let nome = prompt("Qual o seu nome?")
titulo.innerHTML = `Lista de tarefas: ${nome}`;

btnadd.addEventListener("click", criatarefa);
function criatarefa(){
    
}
