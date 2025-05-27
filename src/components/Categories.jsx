// src/components/Categories.jsx
import React from 'react';
import '../styles/Home.css';

const Categories = ({ selectedCategory, setSelectedCategory, categories }) => {
  return (
    <div className="categories">
      <h2>Browse Categories</h2>
      <div className="category-buttons">
        {['All', ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? 'active' : ''}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
