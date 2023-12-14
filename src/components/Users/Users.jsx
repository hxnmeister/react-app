import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';

const Users = () => 
{
    const [users, setUsers] = useState([]);
    const [searchParams, setUrlSearch] = useSearchParams();
    const [searchText, setSearchText] = useState(searchParams.get('q'));

    const getUsers = async () => setUsers((await axios("https://jsonplaceholder.typicode.com/users")).data);
    const searchHandler = (e) => 
    {
        setSearchText(e.target.value);
        setUrlSearch({ q: e.target.value });
    };

    useEffect(() => 
    {
        getUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <input type="text" value={searchText} onChange={ searchHandler }/>

            {users.filter( (user) => user.name.toLowerCase().includes(searchParams.get('q').toLowerCase()) ).map( (user) => <div key={user.id}><NavLink to={`/users/${user.id}`}>{user.name}</NavLink></div> )}
            
            <Outlet/>
        </div>
    );
}

export default Users;
