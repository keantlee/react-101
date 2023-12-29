import { useEffect } from 'react';
import DataTable from 'datatables.net-dt';
import 'datatables.net-dt/css/jquery.dataTables.css'; // Import DataTables CSS

const UserList = ({users, title}) => {
    // console.log(users);

    useEffect(() => {
        // This effect runs after the component renders
        // Initialize DataTable in the useEffect hook to ensure that the component is mounted
        const table = new DataTable('#userTable', {
                responsive: true,
                lengthChange: false,
                searching: true,
                data: users,
                paging: true,
                columns: [
                    { "data": "name" },
                    { "data": "profession" },
                    { "data": "accomplishment"}
                ]
            }); 

            // Optional: Destroy the DataTable instance when the component is unmounted
            return () => {
                table.destroy();
            };
    }, [users])

    return ( 
        <div className="table-container">
        <table className="table table-bordered" id="userTable">
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>PROFESSION</th>
                    <th>ACCOMPLISHMENT</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>   
    );
}
 
export default UserList;