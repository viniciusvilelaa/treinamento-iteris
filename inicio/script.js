var a;
let b;
const c = 5;

/**
 * Executa o submit do formulário da página
 * @param {Event} event Evento de submit
 */
 const onSubmit = (event) => {
    event.preventDefault();
    const submitedValue = {
        nome: event.target.nome.value,
        tipo: event.target.tipo.value,
    };
    console.log(submitedValue);
};
/**
* executa após carregamento do conteúdo do DOM
*/
const onLoad = () => {
    const footerEl = document.querySelector('.footer p');
    const formEl = document.querySelector('form');
// verifica o elemento buscado
    if (footerEl)
        footerEl.innerHTML += ` - ${new Date().getFullYear()}`;
// verifica o elemento buscado
    if (formEl)

  formEl.addEventListener('submit', onSubmit);
// remove evento do documento
  document.removeEventListener('DOMContentLoaded', onLoad);
};
// adiciona evento no documento
document.addEventListener('DOMContentLoaded', onLoad);