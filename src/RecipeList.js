import React from "react";
import RecipeView from "./RecipeView"

// TODO: Create at least one additional component that is used by this component. => RecipeView.js

function RecipeList({recipes, deleteRecipe}) {

  const recipeList = recipes.map((recipe, index) => {
    return (
      <RecipeView
        key={index}
        name={recipe.name}
        cuisine={recipe.cuisine}
        photo={recipe.photo}
        ingredients={recipe.ingredients}
        preparation={recipe.preparation}
        deleteRecipe={() => deleteRecipe(index)}
        />
    )
  })
 
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        { recipeList }
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
