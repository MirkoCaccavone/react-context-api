import { Link } from "react-router-dom";

const PostCard = (props) => {

    // destructuring dell'oggetto props

    const { post } = props;

    return (
        <>

            <div className="postItem">
                <h2>{post.title}</h2>
                <p className="contenuto">{post.content}</p>
                <img src={post.image} alt={post.title} />
                <p>{post.tags.join(', ')}</p>
                <Link to={`/posts/${post.id}`}>Vai al dettaglio</Link>
            </div >

        </>
    )
}





export default PostCard