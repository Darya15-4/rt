import React from "react";
import {TImage} from '../types'
import './Gallery.css'

const Image: React.FC<TImage> = ({url, alt, description}) => {
    if (url && description && alt) {
        return <>
        <img src={url} alt={alt} className="gallery__image"></img>
        <h3 className="gallery__title">{description}</h3>
        </>
    }
    return null;
}
export default Image