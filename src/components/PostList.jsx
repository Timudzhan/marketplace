import PostCard from "./PostCard";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingPost from "./Loading-post";
import Error from "./Error";
function PostList() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const response = await axios.get('https://7ea96478b77fbd21.mokky.dev/post');
                setPosts(response.data);
            } catch (error) {
                setIsError(true);
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
    }, []);

    if (isError) {
        return <Error />     
    }

    return (
        <div className="sells-row">
            {isLoading ? (<LoadingPost />) : (
                <>
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </>
            )}

        </div>
    );
}

export default PostList;
