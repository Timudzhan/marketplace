
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import LoadingCategories from "./Loading-Categories";
import axios from "axios";
import Error from "./Error";
function CategoriesList() {


        const [categories, setCategories] = useState([]);
        const [isLoading, setIsLoading] = useState(false);
        const [isError, setIsError] = useState(false);
        useEffect(() => {
            async function fetchCategories() {
                try {
                    setIsLoading(true);
                    const response = await axios.get(`https://7ea96478b77fbd21.mokky.dev/category`);
                    setCategories(response.data);
                } catch(e) {
                    setIsError(true);
                    console.log(e);
                } finally {
                    setIsLoading(false);
                }
            } fetchCategories();
        }, [])

        if (isError) {
            return <Error />;
        }
        return(
            <section class="mobile-block">
                <div class="mobile-block-header is-green">
                    Категории
                </div>

                {isLoading ? (<LoadingCategories />) : (
                    <div class="all-categories">
                        {categories.map((category) => (
                            <Link to={`/category/posts/${category.id}`} class="category-card">
                                <span class="category-row">
                                    <img src={category.imgURL} alt={category.title} />
                                    <p class="category-card-title">{category.title}</p>
                                </span>
                            </Link>
                    
                        ))}
                    </div>
                )}
            </section>
        )
}

export default CategoriesList;