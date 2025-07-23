import React from 'react';
import {TCard} from '../types'


const Card: React.FC<TCard> = ({id, name, image}) => {
    return (
        <li className='card__item'>
            <img src={image} alt={name} className='card__image'></img>
            <h3 className='card__title'>{name}</h3>
        </li>
    );
}
export default Card
