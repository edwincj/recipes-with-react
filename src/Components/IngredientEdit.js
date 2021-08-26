import React from "react";

const IngredientEdit = (props) => {
  const { ingredient, onIncredientChange, onDelete } = props;

  const changeHandler = (changes) => {
    onIncredientChange(ingredient.id, { ...ingredient, ...changes });
  };

  return (
    <>
      <input
        type="text"
        value={ingredient.name}
        onChange={(e) => changeHandler({ name: e.target.value })}
        className="recipe-edit__input"
      />
      <input
        type="text"
        value={ingredient.amount}
        onChange={(e) => changeHandler({ amount: e.target.value })}
        className="recipe-edit__input"
      />
      <button
        className="btn btn--danger"
        onClick={() => onDelete(ingredient.id)}
      >
        &times;
      </button>
    </>
  );
};

export default IngredientEdit;
