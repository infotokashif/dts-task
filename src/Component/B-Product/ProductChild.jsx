import React from 'react';
import "./Redux.css";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export const ProductChild = ({item}) => {

    const dispatch= useDispatch();
    return (
        <div className="no">
           <img className="image" src={item.image}alt="imagesfromAPI" width="250px" height="250px" />
           <h4>{item.title.substr(0,20)+"..."}</h4>
           <h6>price:${item.price}</h6>
           <button onClick={()=>dispatch({type:"ADD-CART", data:item})}>Add to Cart</button>
           <Link to= "/detail">
           <button onClick={()=>dispatch({type:"SELECTED-PRODUCT",data:item})}>View Detail</button>
           </Link>
        </div>
    );
};

 