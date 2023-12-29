import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

/**
 * Note: This is a custom Fetch
 * Sample function name:
 *  1.) useFetch
 *  2.) useUpdate
 *  3.) useFind
 */

// Version 01
// const useFetchData = (url) => {
//     const [data, setData]           = useState(null);
//     const [isPending, setIsPending] = useState(true);

//     useEffect(() => {
//         // This effect runs after the component renders
//         console.log('initial component render');

//         fetch(url, {
//             method: 'GET',
//             headers: {'Content-Type': 'application/json'}
//         })
//         .then( (res) => {
//             if(!res.ok){
//                 throw Error('Could not fetch the data from resources');
//             }else{
//                 return res.json();
//             }
//         })
//         .then( (data) => {
//             // console.log(data);
//             setData(data);
//             // blogDataTable(data);
//             setIsPending(false);
//         })
//         .catch(err => {
//             setIsPending(false)
//             Swal.fire({
//                 icon: "error",
//                 title: "ERROR:",
//                 text: err.message,
//             });
//         });
//     }, [url]); // The dependencies array determines when the effect should run.

//     return { data, isPending }
// }

// Version 02 using Async and cleanup
const useFetchData = (url) => {
    const [data, setData]           = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        console.log('initial component render');

        const fetchData = async () => {
            try {
                const res = await fetch(url, {method: 'GET', headers: {'Content-Type':'application/json'}})
                
                if(!res.ok){
                    throw Error('Could not fetch the data from resources');
                }else{
                    const fetchData = await res.json();
                    setData(fetchData);
                    setIsPending(false);
                }
            } catch (err) {
                setIsPending(false);
                Swal.fire({
                    icon: 'error',
                    title: 'ERROR',
                    text: err.message,
                });
            }
        };

        fetchData();

        // Cleanup function
        return () => {
            // This function will be executed when the component is unmounted
            console.log('cleanup: component unmounted');
            // Additional cleanup logic can be added here, e.g., canceling subscriptions.
        };

    }, [url]);

    return { data, isPending }
}
export default useFetchData ;