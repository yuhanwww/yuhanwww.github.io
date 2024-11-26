import React from 'react';
import Slider from 'react-slick';
import './artwork_page.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ArtworkSlider = ({ images }) => {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={style} onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--title-color)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ cursor: 'pointer' }}
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={style} onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--title-color)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ cursor: 'pointer' }}
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="artwork-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} />
            {image.description && <p className="gallery-image-description">{image.description}</p>}
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ArtworkSlider;
