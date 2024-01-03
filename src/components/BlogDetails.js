import { useParams } from "react-router-dom";
import useFetchData from "./useFetch";
import Swal from 'sweetalert2';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending } = useFetchData('http://localhost:3001/blogs/' + id);
    
    const handleClick = () => {
        fetch('http://localhost:3001/blogs/' + blog.id, {
            method: 'DELETE', 
            headers: {'Content-Type':'application/json'},
        }).then(() => {
            Swal.fire({
                icon: 'success',
                // title: '',
                text: 'REMOVED!',
            });
        });
    }
    
    return (
        <div className="blog-details">
            {/* <h2>Blog Details - { id }</h2> */}
            { isPending && <div> Loading... </div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>REMOVE</button>
                </article>
            ) }
        </div>
    );
}

export default BlogDetails;