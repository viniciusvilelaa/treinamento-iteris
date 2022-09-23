import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

import { getImovelPorId } from "../../services/imovelApiService";
import ImovelCard from "../../components/imovelCard";
import "./ImovelSinglePage.css";

function ImovelSinglePage(){
    const {id} = useParams();

    const [imovel, setImovel] = useState (null);

    useEffect(() => {
        getImovelPorId(id).then((data) => {
            setImovel(data);
        });
    }, [id]);

    if (!imovel){
        return <div>Carregando...</div>
    } else{
        return(
            <div className="imovel">
                <ImovelCard imovel={imovel} />
                <div className="link">
                    <Link to="/imoveis">Voltar</Link>
                </div>
            </div>
        );
    }

}

export default ImovelSinglePage;
