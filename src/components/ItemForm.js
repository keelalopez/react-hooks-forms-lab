import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({addItem}) {
  function handleForm (e) {
    e.preventDefault()

    const newItemAdded = {
      id: uuid(),
      name: e.target.name.value,
      category: e.target.category.value
    }
    addItem( newItemAdded )
    
    // console.log(newItemAdded) // IT WORKS! CREATES NEW ITEM OBJECT
  }

  return (
    <form className="NewItem" onSubmit={handleForm}>
      <label>
        Name:
        <input 
          type="text"  
          name="name"  
        />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
