import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 2, description: "Chargeer", quantity: 12, packed: false },
// ];

const App = function () {
  const [items, setItems] = useState([]);

  const toggleItem = function (itemId) {
    const newItems = items.map((item) =>
      item.id === itemId ? { ...item, packed: !item.packed } : { ...item }
    );
    console.log(newItems);
    setItems(newItems);
  };
  const handleAddItems = function (item) {
    setItems((prev) => [...prev, item]);
  };

  const handleRemoveItems = function (itemId) {
    const removedItem = items.filter((item) => item.id !== itemId);

    setItems(removedItem);
  };

  const handleClear = function () {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items"
    );
    if (confirmed) setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onRemoveItem={handleRemoveItems}
        onToggleItem={toggleItem}
        onClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
