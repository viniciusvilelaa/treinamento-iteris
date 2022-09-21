var a;
let b;
const c = 5;

/**
 * Envia dados para API
 * @param {{ tipo: number; nome: string }} novaSubmissao
 * @returns {Promise<{ tipo: number; nome: string }>} Nova submissão
 */
 const postData = (novaSubmissao) =>
 fetch(`http://localhost:3000/submissoes`, {
   method: "POST",
   headers: {
     "Content-Type": "application/json",
   },
   body: JSON.stringify(novaSubmissao),
 })
   .then((response) => response.json())
   .catch((err) => console.error(err));



/**
 * Consulta dados na API
 * @returns {Promise<{ tipo: number; nome: string }[]>} Lista de submissões
 */
const getData = () => 
  fetch('http://localhost:3000/palavras')
    .then(response => response.json())
    .catch(err => console.error(err));

/**
 * Adiciona item na lista do html
 * @param {{ tipo: number; nome: string }} item
 * @param {HTMLUListElement} ulEl 
 */
 const addListItem = (item, ulEl) => {
  const liEl = document.createElement("li");
  liEl.innerText = `${item.palavra} - Tipo: ${item.categoriaId}`;
  ulEl.appendChild(liEl);
  
}

/**
 * Adiciona lista de submits consultada
 * @param {HTMLUListElement} ulEl 
 */
const addSubmits = async (ulEl) => {
  // Trabalhando com promises usando async/await
  const result = await getData();

  // Se result existir e tiver elementos no array
  // Se result existir e tiver elementos no array
  if (result && result.length) result.forEach((item) => addListItem(item, ulEl));
}



/**
 * Executa o submit do formulário da página
 * @param {Event} event Evento de submit
 */
 const onSubmit = (event) => {
  event.preventDefault();
  const ulEl = document.querySelector('.main ul');

  if (ulEl) {
    const submitedValue = {
      nome: event.target.nome.value,
      tipo: event.target.tipo.value,
    };

    // Trabalhando com promises sem uso do async/await
    postData(submitedValue).then((novaSubmissao) => {
      addListItem(novaSubmissao, ulEl);
    });
  }
};


/**
* executa após carregamento do conteúdo do DOM
*/
const onLoad = () => {
    const footerEl = document.querySelector('.footer p');
    const formEl = document.querySelector('form');
    const ulEl = document.querySelector(".submits ul");
    // verifica o elemento buscado
    if (footerEl)
        footerEl.innerHTML += ` - ${new Date().getFullYear()}`;
    // verifica o elemento buscado
    if (formEl) formEl.addEventListener('submit', onSubmit);
    // verifica o elemento buscado
    if (ulEl) addSubmits(ulEl);
    // remove evento do documento
    document.removeEventListener('DOMContentLoaded', onLoad);
};
// adiciona evento no documento
document.addEventListener('DOMContentLoaded', onLoad);