import React from 'react';


const Products = (item) => {
  return (
    <>
      <div class="box">
      <img src={item.img} alt="{item.title}"/>
      <div class="link_box">
        <h5>{item.title} </h5>
        <h6>Price: {item.price} €</h6>
        <a href="">
          Buy Now
        </a>
      </div>
      </div>
        
    </>
  )
}

export default Products





