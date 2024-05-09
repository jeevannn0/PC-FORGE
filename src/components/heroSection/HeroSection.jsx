import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    position: 'absolute',
    top: '62%',
    left: '29%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    padding: '10px 20px',
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
  };

  const buttonHoverStyle = {
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.7)',
  };

  return (
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <h1 style={titleStyle}>Experience the New Perspective of </h1>
      <h1 style={titleStyle1}>Building Your Dream PC</h1>
      <Link to={'/allproducts'}><button
        style={{ ...buttonStyle, ...(isHovered ? buttonHoverStyle : {}) }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Build
      </button>
      </Link>
      <img
        src="https://www.cyberpowerpc.com/ti/mainbanner/Windows_11_2024.jpg"
        alt=""
        style={imageStyle}
      />
    </div>
    
  );
}

const titleStyle1 = {
  position: 'absolute',
  top: '37%',
  left: '30%',
  transform: 'translateX(-50%)',
  fontSize: '30px',
  zIndex: 1,
  color: '#fff',
  fontWeight: 'bold',
};

const titleStyle = {
  position: 'absolute',
  top: '30%',
  left: '30%',
  transform: 'translateX(-50%)',
  fontSize: '30px',
  zIndex: 1,
  color: '#fff',
  fontWeight: 'bold',
};

const imageStyle = {
  padding: '25px',
  height: '550px',
  display: 'block',
  margin: '0 auto',
};

export default HeroSection;
