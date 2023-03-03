import React, { useState } from "react";
import { AddCategory } from "./addcategory";
import { GifGrid } from "./GifGrid";

 export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['Zodiaco papa']);

  const onAddCategory = (category) => {
    setCategories(list => [...categories, category]);
    
  };

  return (
    <>
    <h1>GifExpertoo</h1>
    <div>
        <AddCategory onAddCategory={onAddCategory}/>
        {
        categories.map(
          (category, key) => 
          {
         return <GifGrid category={category}key={key}/>
          }

        )
}   
    </div>
    </>
  );
}

export default GifExpertApp;
