import { useParams } from "react-router-dom";
import useFetchData from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending } = useFetchData('http://localhost:3001/blogs/' + id);
    return (
        <div className="blog-details">
            {/* <h2>Blog Details - { id }</h2> */}
            { isPending && <div> Loading... </div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                </article>
            ) }
        </div>
    );
}

export default BlogDetails;