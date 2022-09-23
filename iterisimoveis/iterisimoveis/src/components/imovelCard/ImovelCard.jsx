import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./ImovelCard.css";

export default function ImovelCard(props) {
    //nativco do JS
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });


    const valorFomatado = formatter.format(props.imovel.price);

    return(
        <Card className="imovelCard">
            <CardActionArea>
                <CardMedia component="img" image={props.imovel.image} title="Contemplative Reptitle" />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.imovel.address}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {valorFomatado}
                    </Typography>
                    <div className="linhaPrincipal">
                        <Typography component="span">{props.imovel.owner}</Typography>
                        <Typography component="h3">{props.imovel.type}</Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );

}