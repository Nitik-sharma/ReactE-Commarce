import React from 'react'
import { useState,useEffect } from 'react';
import "./Product.css";

import {FakeApi} from '../../Server/FakeApi';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../../Context/Cart';
function Product() {
  const [loading ,setloading]=useState(true);
  const [product,setproduct]=useState();
  const {productId}=useParams();
  const {addToCart}=useCart();
   useEffect(()=>{
    const fetchProduct=async ()=>{
      setloading(true);
      const product=await FakeApi.fetchProductsById(productId);
      setproduct(product);
      setloading(false);
    }
    fetchProduct().catch(console.log("error"));
   },[productId]);

   if(!loading && !product){
    <div className='container'>
    <div className='product py-2'>
      <div className='details p-3'>product Not found please visit {" "} <Link to="/">Home</Link> to see All product  available</div>
    </div>
  </div>
   }

  return (
    <div className="container">
            {loading ? (
                <div className={"loader"}></div>
            ) : (
                <div className="product py-2">
                    <div className="details grid p-3">
                        <div className="product-image">
                            <img src={product.image} alt="" />
                        </div>
                        <div className="info">
                            <div className="description">
                                <h3>{product.title}</h3>
                                <p className=" my-2">{product.description}</p>
                            </div>
                            <div className="flex">
                                <span className="price">${product.price}</span>
                                <span className="cart" onClick={()=>addToCart(product)}>
                                    <img src="/cart.png" alt=""  />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Product;