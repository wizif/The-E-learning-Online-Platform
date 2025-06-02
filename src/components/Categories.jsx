import React from 'react';
import { 
  FaBitcoin, 
  FaPalette, 
  FaDollarSign, 
  FaBullhorn, 
  FaMusic, 
  FaPuzzlePiece 
} from 'react-icons/fa';
import '../styles/Categories.css';

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    { name: 'All', icon: <FaPuzzlePiece /> },
    { name: 'Blockchain', icon: <FaBitcoin /> },
    { name: 'Design', icon: <FaPalette /> },
    { name: 'Finance', icon: <FaDollarSign /> },
    { name: 'Marketing', icon: <FaBullhorn /> },
    { name: 'Music', icon: <FaMusic /> },
  ];

  return (
    <section className="categories">
      <div className="container">
        <h2>Browse Categories</h2>
        <div className="categories__grid">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`category-card ${selectedCategory === category.name ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <div className="category-icon">
                {category.icon}
              </div>
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;