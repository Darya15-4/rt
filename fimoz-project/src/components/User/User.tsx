import React from 'react';
import {TUser} from '../types'

const User: React.FC<TUser> = 
({id, name, username, email, address, phone, website, company}) => {
    return (
        <>
        <li className='users__item'>
            <h3 className='user__title'>Пользователь {name} с id: {id}</h3>
            <p className='user__inf'>Информация</p>
            <ul className='user__list'>
                <li className='user__item'>Username: {username}</li>
                <li className='user__item'>Email: {email}</li>
                <li className='user__item'>Телефон: {phone}</li>
                <li className='user__item'>Website: {website}</li>
                <li className='user__item'>Компания: {company.name}</li>
                <li className='user__item'>Адрес: {address.city}, {address.street}, {address.suite}</li>
                <li className='user__item'>Координаты: {address.geo.lat}, {address.geo.lng}</li>
            </ul>
        </li>
        </>
    )
}
export default User