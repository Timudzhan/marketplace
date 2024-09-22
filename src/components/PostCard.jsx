import { Link } from "react-router-dom";
function PostCard({post}) {
    return(
        <Link to={`/post/${post.id}`} class="all-sells-card">
            <img src={post.imgURL} alt={post.title} class="sell-card-img"/>
            <div className="sell-card">
                <div className="sell-card-title">{post.title}</div>
                <div className="sell-card-date">{post.date}</div>
                <div className="sell-card-category">{post.category}</div>
            </div>
        </Link>
    );
}
export default PostCard;