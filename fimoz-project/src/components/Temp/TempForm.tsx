import React, { useState } from 'react';
import '../Temp/TempForm.css';
import axios from "axios";

const TempForm: React.FC = () => {
    const [classValue, setClassValue] = useState<string>('');
    const [temp, setTemp] = useState<string | number>('');
    const [status, setStatus] = useState<string>('');

    const sendData = async () => {
        try {
            const response = await axios.post('http://194.67.93.117:80/temp', {
                class: classValue,
                temp: Number(temp)
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200 || response.status === 201) {
                setStatus('Данные успешно отправлены!');
                setClassValue('');
                setTemp('');
            } else {
                setStatus(`Ошибка: ${response.status}`);
            }
        } catch (err) {
            console.error('Ошибка при отправке:', err);
            setStatus('Ошибка при отправке!');
        }
    };

    return (
        <section className="temp">
            <form className="temp__form" onSubmit={(e) => {
                e.preventDefault();
                sendData();
            }}>
                <legend className="temp__legend">Введите данные</legend>

                <div className="temp__field">
                    <label className="temp__label" htmlFor="audience">Аудитория</label>
                    <input
                        className="temp__input"
                        type="text"
                        name="audience"
                        placeholder="Введите номер аудитории"
                        value={classValue}
                        onChange={(e) => setClassValue(e.target.value)}
                        required
                    />
                </div>
                <div className="temp__field">
                    <label className="temp__label" htmlFor="temperature">Температура</label>
                    <input
                        className="temp__input"
                        type="number"
                        name="temperature"
                        placeholder="Введите температуру"
                        value={temp}
                        onChange={(e) => setTemp(e.target.value)}
                        required
                    />
                </div>
                <button className="temp__button" type="submit">Отправить</button>
                <p>{status}</p>
            </form>
        </section>
    );
};

export default TempForm;
