import BackIcon from "../assets/images/back.svg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingDetail from "../components/Loading-detail";
import Error from "../components/Error";
function PostDetail() {

    const {id} = useParams();
    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        async function fetchPost() {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://7ea96478b77fbd21.mokky.dev/post/${id}`);
                setPost(response.data)
            } catch (error) {
                setIsError(true);
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPost();
    }, [id])
    if (isError) {
        return <Error />
    }
    return(
        <section className="mobile-block">
            <Link to="/" className="btn-back">
                <div className="container">
                    <img src={BackIcon} alt="Back-icon"/>
                    Назад
                </div>
            </Link>
            {isLoading ? (<LoadingDetail />) : (
                <div className="detail_container">
                    <img src={post.imgURL} alt={post.title} className="post-detail_img" />
                    <div className="post-detail-title">{post.title}</div>
                    <div className="post-detail-description">{post.description}</div>
                    <div className="seller-contacts">{post.author_contact}</div>
                </div>
            )}
            
        </section>
    );
}

export default PostDetail;