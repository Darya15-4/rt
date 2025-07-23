import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import './Card.css';
import {TCard} from '../types'


const Cards: React.FC = () => {
    const [data, setData] = useState<TCard[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/categories')
        .then ((res) => {
            setData(res.data);
            setLoading(false)
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
        })
    }, [])
    if (loading) {
        return <p className='card__loading'>Загрузка...</p>
    } 
    return (
        <section className='card'>
        <ul className='card__list'>
            {data.map(item => (
                <Card id={item.id} name={item.name} image={item.image} />
            ))}
        </ul>
        </section>
    )
}
export default Cards