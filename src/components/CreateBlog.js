import { useState } from "react";

function AddNewBlogForm(){
    const [title, setTitle]         = useState('');
    const [body, setBody]           = useState('');
    const [author, setAuthor]       = useState('');
    const [isPending, setIsPending] = useState(false);

    // e = means event

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author}
        // console.log(blog);

        setIsPending(true);

        fetch('http://localhost:3001/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('New blog added');
            setIsPending(false);
        });
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" 
                    value={title}
                    onChange={e => setTitle(e.target.value)} 
                    required
                />
                
                <label>Content:</label>
                <textarea 
                    rows="" 
                    cols="" 
                    value={body}
                    onChange={e => setBody(e.target.value)} 
                    required>
                </textarea>

                <label>Author:</label>
                <select
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                
               { !isPending && <button>ADD</button> }
               { isPending && <button disabled>Adding blog...</button> }

                {/* <p>{ title }</p>
                <p>{ content }</p>
                <p>{ author }</p> */}
            </form>
        </div>
    );
}

const CreateBlog = () => {
    return (
        <div className="create_blog">
            <h2>Add new blog</h2>
            <AddNewBlogForm/>
        </div>
    );
}

export default CreateBlog;