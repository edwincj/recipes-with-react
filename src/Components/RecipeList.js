import React, { useContext } from "react";
import Recipe from "./Recipe";
import { RecipeContext } from "../App";

const RecipeList = ({ recipes }) => {
  const { addRecipeHandler } = useContext(RecipeContext);
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary" onClick={addRecipeHandler}>
          Add Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeList;
