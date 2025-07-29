import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import './Card.css';
import {TCard} from '../types'


const Cards: React.FC = () => {
    const [data, setData] = useState<TCard[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const checkValidImage = (url: string): Promise<boolean> => {
        return new Promise((resolve) => {
            const cardImage = new Image();
            cardImage.src = url
            cardImage.onload = () => resolve(true);
            cardImage.onerror = () => resolve(false);
        })
    }
    useEffect(() => {
    const getCard = async () => {
        try {
            setLoading(true);
            const response = await axios.get<TCard[]>('https://api.escuelajs.co/api/v1/categories');

            const validImages: TCard[] = [];

            for (const item of response.data) {
                const isValid = await checkValidImage(item.image);
                if (isValid) {
                    validImages.push(item);
                }
            }

            setData(validImages);
        } catch (error) {
            console.error('Ошибка загрузки:', error);
        } finally {
            setLoading(false);
        }
    };

    getCard();
}, []);
    if (loading) {
        return <p className='card__loading'>Загрузка...</p>
    } 
    return (
        <section className='card'>
        <ul className='card__list'>
            {data.map(item => (
                <Card id={item.id} key={item.id} name={item.name} image={item.image} />
            ))}
        </ul>
        </section>
    )
}
export default Cards