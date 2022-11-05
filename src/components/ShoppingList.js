import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
// import { v4 as uuid } from "uuid";

function ShoppingList({ items, setItems }) {
  // STATES 
  const [selectedCategory, setSelectedCategory] = useState("All"); // Filter Items
  const [newItemData, setNewItemData] = useState({})
  // Handles drop down menu filter
  function handleCategoryChange(event) { // Handles click on category by changeing state
    setSelectedCategory(event.target.value);
  }

  function addItem (newItemAdded) {
    setNewItemData([newItemAdded])
    setItems([...items, newItemAdded])
    // setNewItemData(...items, newItemData) will add new object to items array
  }
  console.log(items)
  // function filters and passes as prop through Items Component
  const itemsToDisplay = items.filter((item) => { // Iterated through complete array and filters per function above
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  
  return (
    <div className="ShoppingList">
      <ItemForm newItemData={newItemData} addItem={addItem}/>
      <Filter onCategoryChange={handleCategoryChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
