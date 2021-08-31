import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const category = ["all", ...new Set(items.map((item) => item.category))];

  const [menuItem, setMenuItem] = useState(items);
  const [categories, setCategories] = useState(category);

  const filterItem = (category) => {
    if (category === "all") {
      return setMenuItem(items);
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItem(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2 className="title">our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItem={filterItem} />
        <Menu items={menuItem} />
      </section>
    </main>
  );
}

export default App;
