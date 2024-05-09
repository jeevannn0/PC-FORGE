import React from 'react';

function HeroSection1() {
  return (
    <div style={{ position: 'relative', textAlign: 'center' }}>
      {/* <h1 style={titleStyle}>Experience the New Perspective of </h1>
       <h1 style={titleStyle1}>Building Your Dream PC</h1> */}
      <button style={buttonStyle}>See More</button>
      <img
        src="https://i.ibb.co/PDqxkYV/Section-1.jpg"
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

const buttonStyle = {
  position: 'absolute',
  top: '69%',
  left: '29%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
  padding: '10px 20px',
  backgroundColor: '#94C827',
  color: '#000',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const imageStyle = {
  padding: '1px',
  height: '600px',
  display: 'block',
  margin: '0 auto',
};

export default HeroSection1;
