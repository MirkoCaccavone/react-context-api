// importiamo il contesto globale e la parte REact di utilizzo dello stesso
import { useContext } from "react";
import GlobalContext from './../context/GlobalContext'


// import componente Card nel listato
import PostCard from "./PostCard";

const PostListUser = () => {

    // destrutturiamo l'esecuzione del useContext (oggetto di ritorno)
    const { posts } = useContext(GlobalContext);



    return (
        <>
            <div className="containerPost">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </>
    )
}

export default PostListUser