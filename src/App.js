import RecipeList from "./Components/RecipeList";
import "./App.css";

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

function App() {
  return (
    <>
      <RecipeList recipes={sample} />
    </>
  );
}

export default App;
