import React from "react";

const IngredientEdit = ({ ingredient }) => {
  //const { name, amount } = ingredient;
  return (
    <>
      <input
        type="text"
        value={ingredient.name}
        className="recipe-edit__input"
      />
      <input
        type="text"
        value={ingredient.amount}
        className="recipe-edit__input"
      />
      <button className="btn btn--danger">&times;</button>
    </>
  );
};

export default IngredientEdit;
