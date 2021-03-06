import React, { useContext } from "react";
import IngredientList from "./IngredientList";
import { RecipeContext } from "../App";

const Recipe = (props) => {
  const { id, name, cookingTime, servings, instructions, ingredients } = props;
  const { deleteRecipeHandler, selectRecipehandler } =
    useContext(RecipeContext);
  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <button
          className="btn btn--primary mr-1"
          onClick={() => selectRecipehandler(id)}
        >
          Edit
        </button>
        <button
          className="btn btn--danger"
          onClick={() => deleteRecipeHandler(id)}
        >
          Delete
        </button>
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
