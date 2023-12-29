import BlogList from './BlogList';
import useFetchData from './useFetch';
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
    const { data: blogs, isPending } = useFetchData('http://localhost:3001/blogs');
   
    return (
        <div className="home">
            { isPending && <div>Loading...</div> }
            { blogs &&<BlogList blogs={blogs} title="All blogs"/> }
        </div> 
    );
}
 
export default Home;