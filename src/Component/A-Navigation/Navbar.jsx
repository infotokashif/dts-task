import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';





export const Navbar = ({setSearch}) => {
    const cartitem= useSelector((state)=>state.groupReducer.cart)
    return (
        <div id='nav' >
            <Link  to="/"  >APIProduct</Link>
            <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='HandlesearchBar'  />
            &emsp; 
            <Link to="/Login"  className='lgn' >Login</Link>
            
            <Link to="/Cart">Cart:{cartitem.length} </Link>
             -
           
        </div>
    );
};

 