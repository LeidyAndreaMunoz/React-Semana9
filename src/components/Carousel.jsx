import React from 'react';
import '../assests/styles/components/Carousel.scss';

const Carousel = ({ children }) => (
  <section className="carousel">
    <div className="carousel__container">
      {children}
    </div>
  </section>
);

export default Carousel;