import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const images = [
    'https://th.bing.com/th/id/OIP.L-jqegq97j0g4X9nhKj-5wHaE8?rs=1&pid=ImgDetMain',
    'https://img.freepik.com/premium-photo/culinary-background-with-wooden-cutting-board-pizza-ingredients_565470-450.jpg',
    'https://th.bing.com/th/id/OIP.8Ckn7SNLeHqAC1HSje-QjwHaEj?w=626&h=385&rs=1&pid=ImgDetMain',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="header">
      {images.map((image, index) => (
        <div
          key={index}
          className={`header-image ${index === currentImageIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button>View Menu</button>
      </div>
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Header;
