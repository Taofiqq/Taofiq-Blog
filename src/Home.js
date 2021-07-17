import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data:blogs, isLoading, error} = useFetch('https://taofiq-blog-api.herokuapp.com/blogs')
    return (
            <div className="home">
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={'All Blogs'}/>}
            {error && <div>{error}</div>}
            </div>
    )
}

export default Home;
