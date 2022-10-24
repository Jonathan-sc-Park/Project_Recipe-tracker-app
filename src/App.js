import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  // State for existing recipes
  const [recipes, setRecipes] = useState(RecipeData);

  // add new recipe into existing list of recipes
  // const addRecipe = (newRecipe) =>
  //   setRecipes((currentRecipes) => [...currentRecipes, newRecipe]);

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });

  //handleChange
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  //handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes([...recipes, formData]);
    setFormData({ ...initialFormState });
  };


  // delete Recipe
  const deleteRecipe = (indexToDelete) =>
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe, index) => index !== indexToDelete)
    );

  // TODO: Add the ability for the <RecipeList />
  //component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate />
  //component to create new recipes.

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate handleSubmit={handleSubmit} handleChange={handleChange} formData={formData}/>
    </div>
  );
}

export default App;
