import axios from "axios";

const urlApi = "http://localhost:8080/imoveis";

export function getImoveis(){
    return axios.get(urlApi).then((AxiosResponse) => {
        return AxiosResponse.data;
    });
}

export function postImovel(novo){
    const imovelPostMovel = { 
        address: novo.address,
        image: novo.image,
        owner: novo.owner,
        price: novo.price,
        type: "Venda"
    }
    return axios.post(urlApi, imovelPostMovel).then((AxiosResponse) => {
        return AxiosResponse.data;
    });
}



export function getImovelPorId(id){
    const urlComId = urlApi + "/" + id;
    return axios.get(urlComId).then((AxiosResponse) => {
        return AxiosResponse.data;
    });
}
