import { useState } from "react";
import CustomFormValidation from "./CustomFormValidation";
import Swal from 'sweetalert2';

function AddNewBlogForm(){
    const initialInputValues = {
        title: "",
        body: "",
        author: ""
    }

    const [inputvalues, setInputValues] = useState(initialInputValues);

    const [errors, setErrors]      = useState({});
    const [isSubmit, setIsSubmit]  = useState(false);

    // e = means event

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputValues({ ...inputvalues, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { errors, errorCount } = CustomFormValidation(inputvalues);
        
        setIsSubmit(true);
        
        if(errorCount === 0){
            setIsSubmit(false);

            try {
                const res = await fetch('http://localhost:3001/blogs', {
                    method: 'POST', 
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify(inputvalues)
                })

                if(!res.ok){
                    throw Error('Could not fetch the data from resources');
                }else{
                    await res.json();
                    setIsSubmit(false);
    
                    Swal.fire({
                        icon: 'success',
                        // title: '',
                        text: 'SAVED!',
                    });

                    setInputValues(initialInputValues);
                }
            } catch (err) {
                setIsSubmit(false);
                Swal.fire({
                    icon: 'error',
                    title: 'ERROR',
                    text: err.message,
                });
            }
        }else{
            setIsSubmit(false);
            setErrors(errors)
        }
    }

    return (
        <div>
            {/* <pre>{JSON.stringify(inputvalues)}</pre> */}
           <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" 
                    name="title"
                    value={inputvalues.title}
                    onChange={handleChange} 
                />
                {errors.title && <p style={{color: "red"}}>{errors.title}</p>}

                <label>Content:</label>
                <textarea 
                    rows="" 
                    cols="" 
                    name="body"
                    value={inputvalues.body}
                    onChange={handleChange}>
                </textarea>
                {errors.body && <p style={{color: "red"}}>{errors.body}</p>}

                <label>Author:</label>
                <select
                    name="author"
                    value={inputvalues.author}
                    onChange={handleChange}
                >
                    <option value="">-- Select author --</option>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {errors.author && <p style={{color: "red"}}>{errors.author}</p>}

                { !isSubmit && <button>ADD</button> }
                { isSubmit && <button disabled>Adding blog...</button> }

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