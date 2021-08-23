import React, { useState, createContext, useEffect } from "react";
import RecipeList from "./Components/RecipeList";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

export const RecipeContext = createContext();
const LOCAL_STORAGE_KEY = "cooking.recipes";

function App() {
  const [recipes, setRecipes] = useState(sample);

  useEffect(() => {
    const recipeJson = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJson !== null) setRecipes(JSON.parse(recipeJson));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const addRecipeHandler = () => {
    const newRecipe = {
      id: uuidv4(),
      name: "new",
      cookingTime: "0:00",
      servings: 0,
      instructions: "New instr",
      ingredients: [
        {
          id: uuidv4(),
          name: "new",
          amount: "0 pounds",
        },
      ],
    };
    setRecipes([...recipes, newRecipe]);
  };

  const deleteRecipeHandler = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const contextValue = { addRecipeHandler, deleteRecipeHandler };

  return (
    <RecipeContext.Provider value={contextValue}>
      <RecipeList recipes={recipes} />
    </RecipeContext.Provider>
  );
}

export default App;

const sample = [
  {
    id: 1,
    name: "Plain Chicken",
    cookingTime: "1:45",
    servings: 3,
    instructions: "1.Put salt \n2.Put in oven \n3.Eat Chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 pounds",
      },
      {
        id: 2,
        name: "Salt",
        amount: "2 tbs",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    cookingTime: "0:45",
    servings: 5,
    instructions: "1.Put paprika \n2.Put in oven \n3.Eat Pork",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "3 pounds",
      },
      {
        id: 2,
        name: "Paprika",
        amount: "3 tbs",
      },
    ],
  },
];
