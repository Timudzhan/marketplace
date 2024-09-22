import PostList from "../components/PostList";

function HomePage() {
    return(
        <section class="mobile-block">
            <div class="mobile-block-header is-secondary">
                Все объявления
            </div>
            <PostList />
        </section>
    );
}

export default HomePage;