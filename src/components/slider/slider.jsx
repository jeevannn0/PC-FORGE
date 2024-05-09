import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styleslider.css'; // Assuming styleslider.css is in the same directory as slider.jsx

import Slider from 'react-slick';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000, // Decreased speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjusted autoplay speed
    
  };
  
  // Image URL
  const imageUrl = "https://storage-asset.msi.com/global/picture/banner/banner_1704425013843a4d42330d97624d785c0f6e5c085e.jpeg";
  
  return (
<div className='slider' style={{ margin: '10px 25px' }}>

      <Slider {...settings}>
        <div>
          
           <img src="https://storage-asset.msi.com/global/picture/banner/banner_1704425013843a4d42330d97624d785c0f6e5c085e.jpeg" alt="slide1" />         </div>
        <div>
          {/* Optimized image */}
          <img src="https://i.ibb.co/3FQXxqQ/banner-1704425013843a4d42330d97624d785c0f6e5c085e.jpg" alt="slide2" />
        </div>
        <div>
          {/* Optimized image */}
          <img src="https://i.ibb.co/RB7PYX8/banner-1704425013843a4d42330d97624d785c0f6e5c085e-1.jpg" alt="slide3" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
