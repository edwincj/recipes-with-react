import React, { useState, createContext, useEffect } from "react";
import RecipeList from "./Components/RecipeList";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import RecipeEdit from "./Components/RecipeEdit";

export const RecipeContext = createContext();
const LOCAL_STORAGE_KEY = "cooking.recipes";

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sample);
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

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
      name: "",
      cookingTime: "",
      servings: 0,
      instructions: "",
      ingredients: [
        {
          id: uuidv4(),
          name: "",
          amount: "",
        },
      ],
    };
    setSelectedRecipeId(newRecipe.id);
    setRecipes([...recipes, newRecipe]);
  };

  const deleteRecipeHandler = (id) => {
    if (selectedRecipeId !== null && selectedRecipeId === id)
      setSelectedRecipeId(undefined);
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const selectRecipehandler = (id) => {
    setSelectedRecipeId(id);
  };

  const recipeChangeHandler = (id, recipe) => {
    const newRecipe = [...recipes];
    const index = newRecipe.findIndex((r) => r.id === id);
    newRecipe[index] = recipe;
    setRecipes(newRecipe);
  };

  const contextValue = {
    addRecipeHandler,
    deleteRecipeHandler,
    selectRecipehandler,
    recipeChangeHandler,
  };

  return (
    <RecipeContext.Provider value={contextValue}>
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
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
