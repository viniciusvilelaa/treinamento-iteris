import { useContext } from "react";
import ListaTarefasContext from "./ListaTarefasContext";

const useListaTarefas = () => useContext(ListaTarefasContext);

export default useListaTarefas;