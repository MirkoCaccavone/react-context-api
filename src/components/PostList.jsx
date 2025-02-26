// Importazione degli hook useState e useEffect da React
import { useState, useEffect } from 'react';

// Importazione di axios per effettuare richieste HTTP
import axios from "axios";

// Importazione del componente Link da react-router-dom per la navigazione
import { Link } from "react-router-dom";

const PostList = () => {

    // UseState per memorizzare i post
    const [posts, setPosts] = useState([]);

    // Funzione per recuperare i post dal server
    function fetchPosts() {
        axios.get("http://localhost:3000/posts")
            .then(res => setPosts(res.data)) // Imposta i post ricevuti nella risposta
            .catch(err => console.log(err)) // Gestisce eventuali errori
    }

    // Effettua il fetch dei post quando il componente viene montato
    useEffect(fetchPosts, []);

    // Funzione per eliminare un post
    function deletePost(idPost) {

        // Filtra i post per rimuovere quello con l'id specificato
        const updatePost = posts.filter(post => post.id !== idPost)

        // Effettua una richiesta DELETE al server per eliminare il post
        axios.delete(`http://localhost:3000/posts/${idPost}`)
            .then(() => setPosts(updatePost)) // Aggiorna lo stato dei post dopo l'eliminazione
            .catch(err => console.log(err)) // Gestisce eventuali errori
    }

    return (
        <>
            <div className="containerPost">
                {posts.length === 0 ? (
                    // Mostra un messaggio se non ci sono post
                    <h2>NON CI SONO POST</h2>
                ) : (
                    // Mappa i post e crea un elemento per ciascuno di essi
                    posts.map((post) => (
                        <div className="postItem" key={post.id}>
                            <h2>{post.title}</h2>
                            <p className="contenuto">{post.content}</p>
                            <img src={post.image} alt={post.title} />
                            <p>{post.tags.join(', ')}</p>
                            <Link to={`/posts/${post.id}`}>Vai al dettaglio</Link>
                            <button className="deleteButton" onClick={() => deletePost(post.id)}>Cancella</button>
                        </div>
                    ))
                )}
            </div>
        </>
    )


}

export default PostList