import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingPost from "../components/Loading-post";
import axios from "axios";
import PostCard from "../components/PostCard";
import Error from "../components/Error";
function PostByCategory() {

    const {id} = useParams();
    const [posts, setPosts] = useState([]);
    const [category, setCategory] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        async function fetchCategory() {
            try {
                const response = await axios.get(`https://7ea96478b77fbd21.mokky.dev/category/${id}`);
                setCategory(response.data);
            } catch(e) {
                setIsError(true);
                console.log(e)
            }
        }
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const response = await axios.get('https://7ea96478b77fbd21.mokky.dev/post');
                setPosts(response.data); //  json
            } catch(error) {
                setIsError(true)
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
        fetchCategory();
    }, [id]);
    if (isError) {
        return <Error />
    }
    return(
        <section class="mobile-block">
            <div class="mobile-block-header is-brown">
                {category.title}
            </div>

            <div class="sells-row">
                {isLoading ? (<LoadingPost />) : (
                    <>
                        {posts.map((post) => {
                            return post.category === category.title ? (
                                    <PostCard key={post.id} post={post} />
                            ) : null
                            
                        })}
                    </>
                )}
            </div>
        </section>
    )
}

export default PostByCategory;