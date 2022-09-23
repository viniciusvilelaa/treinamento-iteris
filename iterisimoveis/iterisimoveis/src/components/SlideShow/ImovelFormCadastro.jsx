import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { postImovel } from "../../services/imovelApiService";
import { useNavigate } from "react-router-dom";


//https://material-ui.com/components/text-fields/
export default function ImovelFormCadastro() {
  let navigate = useNavigate(); //permite mudar a página atual

  const [novoImovel, setNovoImovel] = React.useState({
    address: "",
    image: "",
    owner: "",
    price: "",
  });

  const alertConfig = {
    error: {
      color: "#f44336",
      mensagem: "Aconteceu um erro! Verifique se a API está executando",
    },
    warning: {
      color: "#ff9800",
      mensagem: "Por favor, prencha todos os campos!",
    },
    success: {
      color: "#4caf50",
      mensagem: "Cadastro realizado com sucesso!",
    },
  };
  const [alert, setAlert] = React.useState(alertConfig.success);
  const [openAlert, setOpenAlert] = React.useState(false);

  const handleAlertClose = () => {
    setOpenAlert(false);
  };

  function handlerSubmit(event) {
    //sorry
    //a forma padrão de acessar o elemento do formulário
    //é através do evento de submit
    //o submit acontece, pegamos o evento e o elemento
    //e paramos o post padrão para conseguirmos fazer o que precisamos
    //:/
    event.preventDefault();

    if (event.target.checkValidity()) {
      postImovel(novoImovel)
        .then((data) => {
          setAlert(alertConfig.success);
          setOpenAlert(true);
          //delay para mudar de página
          setTimeout(() => {
            navigate("/imoveis");  //muda de página
          }, 1500);
        })
        .catch((error) => {
          setAlert(alertConfig.error);
          setOpenAlert(true);
        });
    } else {
      setAlert(alertConfig.warning);
      setOpenAlert(true);
    }
  }

  return (
    <div>
      <form className="formCadastro" noValidate onSubmit={handlerSubmit}>
        <TextField
          required
          label="Localização"
          variant="outlined"
          value={novoImovel.address}
          onChange={(event) => {
            setNovoImovel({ ...novoImovel, address: event.target.value });
          }}
        />
        <TextField
          required
          label="Vendedor"
          variant="outlined"
          value={novoImovel.owner}
          onChange={(event) => {
            setNovoImovel({ ...novoImovel, owner: event.target.value });
          }}
        />
        <TextField
          required
          label="url da foto"
          variant="outlined"
          value={novoImovel.image}
          onChange={(event) => {
            setNovoImovel({ ...novoImovel, image: event.target.value });
          }}
        />
        <TextField
          required
          label="Valor de venda"
          type="number"
          variant="outlined"
          value={novoImovel.price}
          onChange={(event) => {
            setNovoImovel({ ...novoImovel, price: event.target.valueAsNumber });
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          Cadastrar novo
        </Button>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openAlert}
        autoHideDuration={2000}
        onClose={handleAlertClose}
      >
        <SnackbarContent
          style={{
            backgroundColor: alert.color,
            fontWeight: 500,
          }}
          message={alert.mensagem}
        />
      </Snackbar>
    </div>
  );
}