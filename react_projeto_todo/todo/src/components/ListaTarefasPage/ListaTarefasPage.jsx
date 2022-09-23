import React, { useState } from "react";
import useListaTarefas from "../../services/ListaTarefas/useListaTarefas";
import Tarefa from "../Tarefa";
import "./ListaTarefasPage.css";

function ListaTarefasPage() {
  const { listaDeTarefas, adicionarTarefa } = useListaTarefas();

  const [novaTarefa, setNovaTarefa] = useState("");

  function inputChangeCallBack(event) {
    setNovaTarefa(event.target.value);
  }

  function btnNovaTarefaCallBack() {
    adicionarTarefa(novaTarefa); // cria a nova tarefa;
    setNovaTarefa(""); //limpa o valor da tela
  }

  return (
    <div className="ListaTarefasPage">
      <h1>Lista de Atividades!</h1>
      <div className="action-box">
        <input
          type="text"
          placeholder="Adicionar nova tarefa"
          value={novaTarefa}
          onChange={inputChangeCallBack}
        />
        <button
          type="button"
          className="button big"
          onClick={btnNovaTarefaCallBack}
        >
          +
        </button>
      </div>
      <div className="list">
        {listaDeTarefas.map((item, i) => {
          return <Tarefa key={i} tarefa={item}></Tarefa>;
        })}
      </div>
    </div>
  );
}
export default ListaTarefasPage;


