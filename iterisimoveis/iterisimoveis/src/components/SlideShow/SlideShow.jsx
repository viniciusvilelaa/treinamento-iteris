import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from 'react-router-dom';
import { getImoveis } from "../../services/imovelApiService";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./SlideShow.css";

function SlideShow() {
  const query = new URLSearchParams(useLocation().search);
  const history = useHistory();
  const [listaImoveis, setListaImoveis] = useState([]);
  const [index, setIndex] = useState(query.get('indice') ?? 0);
  // Como o react renderiza novamente o componente ao atualizar o estado
  // Podemos usar algumas constantes para melhorar a legibilidade
  const imovelSelecionado = listaImoveis[index];

  useEffect(() => {
    getImoveis().then((data) => {
      setListaImoveis(data);
    });
    // O array vazio no useEffect indica que somente deve ser executando uma vez
  }, []);

  function mudarSlide(mudanca) {
    let novoindex = index + mudanca;
    if (novoindex >= listaImoveis.length) {
      novoindex = 0; //passou volta para o primeiro
    } else if (novoindex < 0) {
      novoindex = listaImoveis.length - 1; // antes do primeiro, vai para o último
    }

    setIndex(novoindex);
    history.push({
      search: `?indice=${novoindex}`
    });
  }

  if (!imovelSelecionado) {
    return <div>carregando lista de imóveis....</div>;
  } else {
    return (
      <div className="slideShow">
        <IconButton aria-label="anteior" onClick={() => mudarSlide(-1)}>
          <ArrowBackIosIcon />
        </IconButton>
        <Card>
          <CardActionArea className="slideShowCard">
            <CardMedia
              component="img"
              image={imovelSelecionado.image}
              title={imovelSelecionado.address}
            />
          </CardActionArea>
        </Card>
        <IconButton aria-label="próximo" onClick={() => mudarSlide(1)}>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    );
  }
}
export default SlideShow;