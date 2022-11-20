import React from 'react';
import './ButtonCart.css';
import Products from '../Products/Products';

const ButtonCart = (Products) => {
  return (
    <>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Shopping Cart</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {/* <ul>
          {Products.map(product =>(
            <Products key={product.id}/>
          ))}
        </ul> */}
      </div>
      <div className="modal-footer">
       
        <button type="button" className="btn btn-primary">Payment</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default ButtonCart