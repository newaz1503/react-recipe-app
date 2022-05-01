import React from 'react';
import Styles from '../styles/Recipe.module.css'
const Recipe = ({recipe}) => {
    const {label, calories, image, ingredients} = recipe.recipe;
    return (
        <div className={Styles.recipe}>
            <h2>{label}</h2>
            <ul>
                { ingredients.map(item => (
                    <li key={Math.random()}>{item.text}</li>
                ))}
            </ul>
            <p>{calories}</p>
            <img src={image} alt={label} />
        </div>
    );
};
export default Recipe;