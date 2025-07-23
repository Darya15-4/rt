import React, { useEffect, useState } from 'react';
import User from './User';
import { TUser } from '../types'
import axios from 'axios';
import './User.css'

const Users: React.FC = () => {
    const [user, setUser] = useState<TUser[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setUser(res.data);
            setLoading(false)
        }) 
        .catch(error => {
            console.log(error);
            setLoading(false)
        })
    })

    if (loading) {
        return <p className='user__loading'>Загрузка...</p>
    }

    return (
        <section className='users'>
            <h2>Пользователи</h2>
            <ul className='users__list'>
                    {user.map(item => (
                    <User 
                    id={item.id}
                    name={item.name}
                    username={item.username}
                    email={item.email}
                    address={item.address}
                    phone={item.phone}
                    website={item.website}
                    company={item.company}
                    />
                ))}
            </ul>
        </section>
    )
}
export default Users