import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({onSearch,cartCountItem}) {
 const [searchQuery,setSearchQuery]=useState("");
 
 const handleSearch=()=>{
  if(searchQuery.trim().length){
    onSearch(searchQuery.trim());
  }
  setSearchQuery("");
 }
  return (
    <div className="wrapper">
      <header className="container">
        <div className="header py-2">
          <div className="grid">
            <Link to="/" className="link">
              <h1 className="brand">E-Commarce </h1>
            </Link>
            <div className="formContainer">
              <form className="search">
                <div className="form-control">
                  <input type="text" placeholder="Search Product....." value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
                </div>
                <button type="button" className="search-btn" onClick={handleSearch}>Search</button>
              </form>
            </div>
            <Link to="/cart" className="link headerCart">
            <img src="./cart.png" className="cartImg"/>
            {cartCountItem>0 &&(
           <div className="cartCounter">{cartCountItem<=9?cartCountItem:cartCountItem}</div>
            )}
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
