import React from "react";

function RecipeCreate({ formData, handleChange, handleSubmit }) {
  // TODO: Add the required input and textarea form elements.
  // <input> field for the name, cuisine, photo(URL)
  //<input name="name">, <input name="cuisine">, <input name="photo">
  // <textarea> for ingredients and preparation.
  //<textarea name="ingredients">,<textarea name="preparation">
  // TODO: Add the required submit and change handlers

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name"></label>
              <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Name"
                required
              />
            </td>
            <td>
              <label htmlFor="cuisine"> </label>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                placeholder="Cuisine"
                required
              />
            </td>
            <td>
              <label htmlFor="photo"> </label>
              <input
                id="photo"
                type="url"
                name="photo"
                onChange={handleChange}
                value={formData.photo}
                placeholder="URL"
                required
              />
            </td>
            <td>
              <label htmlFor="ingredients"> </label>
              <textarea
                id="ingredients"
                name="ingredients"
                onChange={handleChange}
                value={formData.ingredients}
                placeholder="Ingredients"
                required
              />
            </td>
            <td>
              <label htmlFor="preparation"> </label>
              <textarea
                id="preparation"
                name="preparation"
                onChange={handleChange}
                value={formData.preparation}
                placeholder="Preparation"
                required
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
