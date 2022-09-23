import TarefaModel from "../../models/TarefaModel";



export function listaTarefasContextBuilder([listaDeTarefas, setListaDeTarefas])  {
    return {
        listaDeTarefas,
        adicionarTarefa: (tarefa) => 
            setListaDeTarefas(adicionar(listaDeTarefas, tarefa)),
        atualizarStatus: (tarefa) => 
            setListaDeTarefas(editar(listaDeTarefas, tarefa)),
    }
}


function adicionar(listaDeTarefas, descricaoTarefa) {
    const novaTarefa = new TarefaModel(
        listaDeTarefas.length + 1,
        descricaoTarefa
    );
    return [...listaDeTarefas, novaTarefa] // retorna uma nova lista
}

function editar(listaDeTarefas, tarefa) {
    const tarefaAtualizada = {... tarefa, concluida: !tarefa.concluida}

    const ListaAtualizada = listaDeTarefas.map((x) => {
        if(x.id === tarefa.id){
            return x;
        }
        else {
            return tarefaAtualizada;
        }
       
    });
    return ListaAtualizada;
}