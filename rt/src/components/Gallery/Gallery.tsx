import React, { useEffect, useState, useRef } from 'react';
import { TImage } from '../types';
import axios from "axios";
import Image from "./Image";
import './Gallery.css'


const Gallery: React.FC = () => {
  const [images, setImages] = useState<TImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const attempt = useRef(0);
  const maxAttempts = 3;
  const retryDelay = 1500;

  useEffect(() => {
    const fetchData = async () => {
      try {
        attempt.current++;
        const response = await axios.get<TImage[]>('http://194.67.93.117:80/images');
        const data = response.data;

        if (Array.isArray(data) && data.length === 0) {
          setImages([]);
          setError(null);
        } else {
          setImages(data);
          setError(null);
        }

        setLoading(false);
      } catch (err) {
        if (attempt.current < maxAttempts) {
          setTimeout(fetchData, retryDelay);
        } else {
          setLoading(false);
          setError('Не удалось загрузить изображения после 3 попыток');
          console.error(err);
        }
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;
  if (images.length === 0) return <p>Изображения не найдены</p>;

  return (
    <section className='gallery'>
      <h2 className='gallery__title'>Gallery</h2>
      <ul className='gallery__list'>
        {images.map((item) => (
          <li className='gallery__item' key={item.url}>
            <Image
              url={item.url}
              alt={item.alt}
              description={item.description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Gallery;
