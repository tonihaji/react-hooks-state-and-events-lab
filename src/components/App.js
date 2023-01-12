import { useState } from 'react';
import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {

    const [isdarkMode, setIsDarkMode] = useState(false)
  
    
  
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  // const appClass = false ? "App dark" : "App light"

  return (
    <div className={isdarkMode ? "App dark":"App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={()=>setIsDarkMode(!isdarkMode)}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
