import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import "./Redux.css"
import { Link } from 'react-router-dom';

export const Cart = () => {
    const dispatch= useDispatch()
    const cartitem = useSelector((state)=>state.groupReducer.cart);
  
    
    return (
        <div>
            <h1>Added Product</h1>
            <div className="cards-parent" >
            {cartitem.map((item)=>{
                return(
                    <div className="no">
                    <img className="image" src={item.image}alt="imagesfromAPI" width="250px" height="250px" />
                    <h4>{item.title.substr(0,20)+"..."}</h4>
                    <h6>price:${item.price}</h6>
                    <button  >Purchase</button>
                    <button onClick={()=>dispatch({type:"REMOVE-PRODUCT", data:item})}>Remove</button>
                    <Link to="/detail">
                    <button onClick={()=>dispatch({type:"SELECTED-PRODUCT", data:item})}>View Detail</button>
                    </Link>
                    </div>
                )
            })}
            </div>
        </div>
    );
};

 