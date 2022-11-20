import React from 'react';
import './../Products/Products.css';
import { itens } from '../../assets/db/db';
import Products from './../Products/Products';

const ContainerProducts = () => {
  return (
    <>
      <section class="fruit_section layout_padding">
    <div class="container">
      <div class="heading_container">
       <hr/>
        <h2>
          Fresh Fruit
        </h2>
      </div>
    </div>
    <div class="container-fluid">
    <div class="fruit_container">
    
    {/* Propriedades de los productos */}

    {  
        itens.map(item=>
            <Products 

            key = {item.id}
            id = {item.id}
            title = {item.title}
            price = {item.price}
            img = {item.img}

             />

    
            )
    }


      

      </div>
    </div>
  </section>
    </>
  )
}

export default ContainerProducts;










