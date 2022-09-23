import React from "react";
import "./Tarefa.css";
import useListaTarefas from "../../services/ListaTarefas/useListaTarefas";


function Tarefa(props){
    const {atualizarStatus} = useListaTarefas();

    let classNameTarefa = "tarefa";

    if(props.tarefa.concluida){
        classNameTarefa += " concluida";
    }

    function checkboxOnChange(){
        atualizarStatus(props.tarefa);
    }

    return(
        <div className="tarefa-wrapper">
            <div className={classNameTarefa}>{props.tarefa.descricao}</div>
            <input className={classNameTarefa} 
            type="checkbox"
            defaultChecked={props.tarefa.concluida}
            onChange={checkboxOnChange}
            />
        </div>
    )
}

export default Tarefa;