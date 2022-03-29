import React, { useState, useEffect  } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { ProductChild } from './ProductChild';
import "./Redux.css";
import { useSelector } from 'react-redux';

export const ProductParent = ({search}) => {
  const proitem= useSelector((state)=>state.groupReducer.product)
  console.log(proitem,"====>>>>>>")
    const dispatch = useDispatch()
    const [products,setProducts]= useState([])
    // const stateProducts= useSelector((state)=>state.groupReducer.products)
  
    const getAPIProduct=async()=>{
        
  const allProduct= await axios.get("http://fakestoreapi.com/products")
//   console.log(allProduct)
  setProducts(allProduct.data)

       proitem.length<=0
       &&
        dispatch({type:"ADD-PRODUCT",data:allProduct.data})
    }
    useEffect(()=>{
        getAPIProduct()
    },[]);
    useEffect(()=>{
  const filtered= proitem.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()));
  search==="" ? setProducts(products) :setProducts(filtered)
    },[products,search])
    return (
        <div>
        {/* <h1>This is product Parent</h1> */}
            <div className="cards-parent">
            
            {products.map((item)=>{
                return <ProductChild item={item}/>
            })}
            </div>
        </div>
    );
};

