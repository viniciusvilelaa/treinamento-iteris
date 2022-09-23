import React, {useEffect, useState} from "react";
import { getImoveis } from "../../services/imovelApiService";
import ImovelCard from "../../components/imovelCard";
import { useNavigate } from "react-router-dom";
import "./ImoveisPage.css";


function ImoveisPage(){
    const navigate = useNavigate();
    const [listaImoveis, setListaImoveis] = useState ([]);

    useEffect(() => {
        getImoveis().then((data) => {
            setListaImoveis(data);
        });
    }, []);

    function irParaDetalhe(id){
        navigate(`/imoveis/${id}`);
    }

    return(
        <div className="listaImoveis">
            <h1>Pagina de Imoveis</h1>

            <div>
                
                {listaImoveis.map((item, i) =>
                    <div onClick={() => irParaDetalhe(item.id)} key={i} className="listaImovel__imovelCard">
                        <ImovelCard imovel={item} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ImoveisPage;