import React, { useContext } from "react";
import IngredientEdit from "./IngredientEdit";
import { RecipeContext } from "../App";
import { v4 as uuidv4 } from "uuid";

const RecipeEdit = ({ recipe }) => {
  const { name, cookingTime, servings, instructions, ingredients } = recipe;
  const { recipeChangeHandler, selectRecipehandler } =
    useContext(RecipeContext);

  const changeHandler = (changes) => {
    recipeChangeHandler(recipe.id, { ...recipe, ...changes });
  };

  const ingredientChangeHandler = (id, ingredient) => {
    const newIngredients = [...ingredients];
    const index = newIngredients.findIndex((i) => i.id === id);
    newIngredients[index] = ingredient;
    changeHandler({ ingredients: newIngredients });
  };

  const addIngredientHandler = () => {
    const newIngredient = {
      id: uuidv4(),
      name: "",
      amount: "",
    };
    changeHandler({ ingredients: [...ingredients, newIngredient] });
  };

  const deleteIngredientHandler = (id) => {
    changeHandler({ ingredients: ingredients.filter((i) => i.id !== id) });
  };

  return (
    <div className="recipe-edit">
      <div className="recipe-edit__close-btn-container">
        <button
          className="btn recipe-edit__close-btn"
          onClick={() => selectRecipehandler(undefined)}
        >
          &times;
        </button>
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
          onChange={(e) => changeHandler({ name: e.target.value })}
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
          onChange={(e) => changeHandler({ cookingTime: e.target.value })}
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
          onChange={(e) =>
            changeHandler({ servings: parseInt(e.target.value) || "" })
          }
          className="recipe-edit__input"
        />
        <label htmlFor="instructions" className="recipe-edit__label">
          Instructions
        </label>
        <textarea
          name="instructions"
          id="instructions"
          className="recipe-edit__input"
          onChange={(e) => changeHandler({ instructions: e.target.value })}
          value={instructions}
        />
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div />
        {ingredients.map((ingredient) => {
          return (
            <IngredientEdit
              key={ingredient.id}
              ingredient={ingredient}
              onIncredientChange={ingredientChangeHandler}
              onDelete={deleteIngredientHandler}
            />
          );
        })}
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button className="btn btn--primary" onClick={addIngredientHandler}>
          Add Ingredient
        </button>
      </div>
    </div>
  );
};

export default RecipeEdit;
