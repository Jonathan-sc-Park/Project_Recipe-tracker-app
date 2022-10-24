import React from "react";

  // TODO: [RecipeView]Display the list of recipes using the structure of table that is provided.
    // should display the name, cuisine, photo, ingredients, preparation, (Delete)delete button
  // TODO: [RecipeView]Each recipe row must have a delete button 
    //<button name="delete">Delete</button>


function RecipeView({name, cuisine, photo, ingredients, preparation, index, deleteRecipe}) {
  
  return (
    <tr key={index}>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td><img src={`${photo}`} alt=""/></td>
      <td className=""><p>{ingredients}</p></td>
      <td className=""><p>{preparation}</p></td>
      <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
    </tr>
  ) 
}

export default RecipeView;