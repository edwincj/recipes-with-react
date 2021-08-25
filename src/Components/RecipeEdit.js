import React from "react";
import IngredientEdit from "./IngredientEdit";

const RecipeEdit = ({ recipe }) => {
  const { name, cookingTime, servings, instructions, ingredients } = recipe;
  return (
    <div className="recipe-edit">
      <div className="recipe-edit__close-btn-container">
        <button className="btn recipe-edit__close-btn">&times;</button>
      </div>
      <div className="recipe-edit__details-grid">
        <label htmlFor="name" className="recipe-edit__label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          className="recipe-edit__input"
        />
        <label htmlFor="cookingTime" className="recipe-edit__label">
          Cooking Time
        </label>
        <input
          type="text"
          name="cookingTime"
          id="cookingTime"
          value={cookingTime}
          className="recipe-edit__input"
        />
        <label htmlFor="servings" className="recipe-edit__label">
          Servings
        </label>
        <input
          type="number"
          min="1"
          name="servings"
          id="servings"
          value={servings}
          className="recipe-edit__input"
        />
        <label htmlFor="instructions" className="recipe-edit__label">
          Instructions
        </label>
        <textarea
          name="instructions"
          id="instructions"
          className="recipe-edit__input"
        >
          {instructions}
        </textarea>
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div />
        {ingredients.map((ingredient) => {
          return <IngredientEdit key={ingredient.id} ingredient={ingredient} />;
        })}
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button className="btn btn--primary">Add Ingredient</button>
      </div>
    </div>
  );
};

export default RecipeEdit;
