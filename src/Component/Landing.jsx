import React, { useState } from 'react';
import { Navbar } from './A-Navigation/Navbar';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import { ProductParent } from "../Component/B-Product/ProductParent"
import { Cart } from '../Component/B-Product/Cart';
import { ProductDetail } from '../Component/B-Product/ProductDetail';
import { Login } from '../Component/B-Product/Login';


export const Landing = () => {
    const [search,setSearch]= useState("")
    return (
        <div>
            <BrowserRouter>
            <Navbar setSearch={setSearch}/>
            <Routes>
                <Route path="/" element={<ProductParent search={search} />}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/detail" element={<ProductDetail/>}/>
                <Route path="/login" element={<Login/>}/>
                
            
            </Routes>
            </BrowserRouter>
        </div>
    );
};

 