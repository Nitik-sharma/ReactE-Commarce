import React, { useEffect, useState } from 'react'
import {FakeApi} from '../../Server/FakeApi';
import Item from '../../Components/item/Item';
import { useSearchParams } from 'react-router-dom';
import { useCart } from '../../Context/Cart';
function Products() {
  const [loading,setLoading]=useState();
  const [product,setProduct]=useState([]);
  const [query,setQuery]=useSearchParams();
  const searchQuery=query.get('q');
  const {addToCart}=useCart();

  useEffect(()=>{
    const fetchProduct=async ()=>{
      setLoading(true);
      const products=searchQuery?await FakeApi.fetchProductsByQuery(searchQuery):await FakeApi.fetchApllProducts();
      setProduct(products);
      setLoading(false);
    }
    fetchProduct().catch((console.log("error")));
  },[searchQuery])

  if(!loading && searchQuery && !product.length){
return(
  <div className='container'>
    <div className='product py-2'>
      <div className='details p-3'>No  Product is Matching </div>
    </div>
  </div>
)
  }

  return (
    <>
    <div className='container'>
      <div className='product my-5'>
      <div className='grid'>
        {
          loading ?(
            <div className='loader' />
          ):(
            product.map((i)=>(
              <Item key={i.id} data={i}  addToCart={()=>addToCart(i)}/>
            ))
          )
        }
      </div>
      </div>
    </div>
    
    </>
  )
}

export default Products