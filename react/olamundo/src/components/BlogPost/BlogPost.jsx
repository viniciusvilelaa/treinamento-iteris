import React, {useState} from "react";
import "./BlogPost.css";

function BlogPost(props){

    const [count, setCount] = useState(0);
    const [post, setPost] = useState(props.post);

    function handleShare(){
        setCount(count + 1);
    }

    function checkboxChangeBack(event) {
        const novoValorExibirImagem = !post.exibirImage;
        // verifique o que acontece se não chamarmos o setPost
        // é um erro comum, que você vai fazer bastante
        // precisamos informar a atualização, para o react renderizar novamente
        // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        setPost({ ...post, exibirImage: novoValorExibirImagem });
      }

        let imgTag = <div></div>;
        if (post.exibirImage) {
            imgTag = <img src={post.image} alt={post.title} />;
        }


    return (
        <article className="blogPost">
            <h2>{post.title}</h2>
            <div>
            <input
                type="checkbox"
                defaultChecked={post.exibirImage}
                onChange={checkboxChangeBack}
            />{" "}
            Exibir imagem?
            </div>
            {imgTag}
            <p>{post.text}</p>
            <button onClick={handleShare}>Compartilhar</button>
            <p>Seu post foi compartilhado {count} vezes!</p>
        </article>
        );
}

export default BlogPost;