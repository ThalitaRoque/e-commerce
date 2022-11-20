import React from 'react';
import imagens from './../../assets/db/imagens';
import './Carousel.css';

const Carousel = () => {
  return (
    <>
    <div className="hero_area">
    
    <div className="brand_box">
      <a className="navbar-brand" href="index.html">
        <span>
          Ninom
        </span>
      </a>
    </div>
    
    <section className=" slider_section position-relative">
      <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
        <div className='carouselExampleControls'>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="img-box">
              <img src={imagens.img7} alt=""/>
            </div>
          </div>
          </div>
          <div className="carousel-item">
            <div className="img-box">
              <img src={imagens.img7} alt=""/>
            </div>
          </div>
          <div className="carousel-item">
            <div className="img-box">
              <img src={imagens.img7} alt=""/>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="carouselExampleControls" role="button" data-slide="prev">
          <span className="sr-only"></span>
        </a>
        <a className="carousel-control-next" href="carouselExampleControls" role="button" data-slide="next">
          <span className="sr-only"></span>
        </a>
      </div>
     
    </section>
    
  </div>
    </>
  )
}

export default Carousel