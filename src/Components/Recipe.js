import React from "react";
import IngredientList from "./IngredientList";

const Recipe = (props) => {
  const { name, cookingTime, servings, instructions, ingredients } = props;
  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <button className="btn btn--primary mr-1">Edit</button>
        <button className="btn btn--danger">Delete</button>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Cooking Time:</span>
        <span className="recipe__value">{cookingTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Servings:</span>
        <span className="recipe__value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instructions:</span>
        <div className="recipe__value recipe__value--indent recipe__instructions">
          {instructions}
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingredients:</span>
        <div className="recipe__value recipe__value--indent">
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
