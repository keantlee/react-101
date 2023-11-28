import { useState, useEffect } from 'react';
import BlogList from './BlogList';
// import { people } from "./data";
// import { getImageUrl } from "./utils";
// import Container from 'react-bootstrap/Container';
// import Card from 'react-bootstrap/Card';

/**
 * Note: useState Hooks
 * 
 * 
 * Note: Props - are a way to pass data from one component a parent into a child component.
 *             - Every parent component can pass some information to its child components by giving them props.
 *             - Props might remind you of HTML attributes, but you can pass any JavaScript value through them,
 *               including objects, array, function, and even JSX.
 * For example:
 *   Parent component: const Home
 *   Child component: <BlogList />
 * 
 * Note: Rendering Lists - You will often want to display multiple similar components from a collection of data.
 * You can use JavaScript's "filter()" and "map()" with React to filter and transform your array of data into an
 * array of components.
 * 
 * Note: For each arrat item, you will need to specify a "key". Usually, you will want to use an ID from
 * the database as "Key". Keys let React keep track of each item's place in the list even if the list changes.
 * 
 * Note: useEffect Hooks - this hook runs a function every render of the components.
 *                       - remember the component renders initially when it first load and it renders all in the DOM,
 *                       - but then it also happend when the state changes.
 *                       - It re-renders the DOM. So we can update the state in the browser.
 *                       - the use of useEffect hook is a way to run code on every render.
 * Dependency Array on useEffect
 */

const Home = () => {
    // let name = 'mario';
    const [blogs, setBlogs] = useState([
        { id: 1, title: 'My new website', body: 'lorem ipsum...', author: 'Mario Ramos' },
        { id: 2, title: 'The Witcher', body: 'lorem ipsum...', author: 'Luigi Lorichi' },
        { id: 3, title: 'About Cats and Dogs', body: 'lorem ipsum...', author: 'Caramel Shushi' },
        { id: 4, title: 'My second website', body: 'lorem ipsum...', author: 'Mario Ramos' },
    ]);

    const [name, setName] = useState('Mario Ramos');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    };

    useEffect(() => {
        // This effect runs after the component renders
        console.log('use effect hooks');
    }, []); // The dependencies array determines when the effect should run.



    // const listItems = (
    //     <Container>
    //     <div class='d-flex flex-row'>
    //         {people.map(person => 
    //             <div class='col-md-5'>
    //                 <Card>
    //                     {/* <Card.Img variant="top" src={getImageUrl(person)} alt={person.name}/> */}
    //                     <img
    //                         src={getImageUrl(person)}
    //                         alt={person.name}
    //                     />
    //                     <Card.Body>
    //                         <Card.Text>
    //                             <p>
    //                                 <b>{person.name}:</b>
    //                                 {' ' + person.profession + ' '}
    //                                 known for  {person.accomplishment}.
    //                             </p>
    //                         </Card.Text>
    //                     </Card.Body>
    //                 </Card>
    //             </div>
    //         )};
    //     </div>
    //     </Container>
    // );  

    return (
        <div className="home">
            {/* <BlogList blogs={blogs} title="All blogs"/>  */}
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/> 
            <button onClick={() => setName('Sakura Shashimi')}>change name</button>
            <p>{name}</p>
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Mario Ramos")} title="Mario's blogs"/>  */}
            {/* <hr /> */}
            {/* {listItems} */}
        </div>    
    );
}

// const Home = () => {
//     // let name = 'mario';
    
//     const [name, setName] = useState('mario');

//     const [age, setAge] = useState(25);

//     const handleClick = () => {
//         setName('luigi');
//         setAge(30);
//     };

//     return (
//         <div className="home">
//             <h2>HOME PAGE</h2>
//             <p>{ name } is { age } year old</p>
//             <button onClick={handleClick}>Click me</button>
//         </div>    
//     );
// }
 
export default Home;