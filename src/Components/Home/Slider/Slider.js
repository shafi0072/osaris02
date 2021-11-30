import React from 'react';
import Slide1 from '../../../Resorce/IMG_1699.JPG';
import Slide2 from '../../../Resorce/siddharth-pawaskar-2-image-close.jpg';
import Slide3 from '../../../Resorce/about-1.jpg';
import './Slider.css';
import '../Responsive.css';
const Slider = () => {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active bg-car1">
      <div className="d-flex justify-content-start mainContentnCar">
          <div style={{width:'50%'}}>
              <h1 className="slider-head">OSIRIS GUITARS</h1>
              <p className="slider-p">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur
There is no one who loves pain itself, who seeks after it and wants to have it, simply</p>
<button className="ButtonHomeCar">Get Started</button>
          </div>
      </div>
    </div>
    {/* <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div> */}
  </div>
  
</div>
    );
};

export default Slider;