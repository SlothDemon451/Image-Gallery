'use client';
import Navbar from "./components/Navbar";
import { Button } from "./components/Button";
import Cardd from "./components/Cardd";
import React, { useState } from "react";
import { images, categories } from "./lib/imageData";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // const filteredImages = selectedCategory === 'All' ? images : images.filter(image => image.category === selectedCategory);

  let filteredImages = [];
  if (selectedCategory === 'All') {
    filteredImages = images;
  } else if (selectedCategory === 'A-Z' ){
    filteredImages = images.slice().sort((a, b) => a.heading.localeCompare(b.heading));
  } 
  else {
    filteredImages = images.filter(image => image.category === selectedCategory);
  }

  return (
    <>
      <Navbar />
      <div className="button-group">
        {categories.map((category, index) => (
          <Button 
            key={index}
            borderRadius="4rem" // Example of custom borderRadius
            duration={3000} // Example of custom duration for the moving border
            onClick={() => setSelectedCategory(category)}
            isSelected={selectedCategory === category}
          >
            {category}
          </Button>
        ))}
      </div>
      
      <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10 gap-x-4 gap-y-4'>
        {filteredImages.map((item, key) => (
          <Cardd
            key={key}
            src={item.src}
            alt={item.alt}
            heading={item.heading}
            category={item.category}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}
