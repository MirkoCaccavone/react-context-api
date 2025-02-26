// Hook di React per gestire lo stato del componente
import { useState, } from "react";
import axios from "axios";

const initialFormData = {
    title: "",
    content: "",
    image: "",
    tags: [],
};

const PostForm = () => {

    // utilizzo dello useState per la gestione dei data (array di oggetti post)
    const [posts, setPosts] = useState([]);

    // state per la gestione delle informazioni raccolte dai campi del form
    const [formData, setFormData] = useState(initialFormData)


    // funzione di gestione delle info dei campi
    function handleFormData(e) {

        const value = e.target.name === "tags" ? e.target.value.split(",") : e.target.value;

        setFormData((currentFormData) => ({
            ...currentFormData,
            [e.target.name]: value,
        }));
    }


    // funzione di gestione dell'invio dell'intero form per il nuovo post
    function handleSubmit(e) {
        e.preventDefault();

        // chiamata verso la API in post con invio dati nuovo post
        axios.post("http://localhost:3000/posts", formData)
            .then(res => {
                // uso la risposta dell API per creare il nuovo array posts
                setPosts((currentPosts) => [...currentPosts, res.data])
            })
            .catch(err => console.log(err)
            )

        // resetto il form
        setFormData(initialFormData);
    }

    return (
        <>
            <form id="formPost" action="#" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    onChange={handleFormData}
                    value={formData.title}
                    placeholder="Inserisci titolo post"
                />

                <textarea
                    name="content"
                    onChange={handleFormData}
                    value={formData.content}
                    placeholder="Contenuto post"
                ></textarea>

                <input
                    type="text"
                    name="image"
                    onChange={handleFormData}
                    value={formData.image}
                    placeholder="image post"
                />

                <input
                    type="text"
                    name="tags"
                    onChange={handleFormData}
                    value={formData.tags}
                    placeholder="tag post"
                />

                {/* bottone di invio */}
                <button className="addButton">Aggiungi</button>

            </form>
        </>
    )
}

export default PostForm
