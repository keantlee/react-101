import UserList from './UserList';
import useFetchData from './useFetch';

const User = () => {
    const { data: users, isPending } = useFetchData('http://localhost:3002/users');

    return (
        <div className="uList">
            { isPending && <div>Loading...</div> }
            { users &&<UserList users={users} title="List of users"/> }
        </div> 
    );
}

export default User;