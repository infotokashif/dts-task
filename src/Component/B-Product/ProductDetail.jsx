
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import "./Redux.css"

export const ProductDetail = () => {
    const cartitem = useSelector((state)=>state.groupReducer.selectedProd[0]);
    // [o] yeh is array ko ek zero indexobject me convert kar deta hai..
    const dispatch = useDispatch();
//   console.log(selecteditem,"++++======>")
   
    return (
        <div className="no">
           <img className="image" src={cartitem.image}alt="imagesfromAPI" width="250px" height="248px"  />
           <h4>{cartitem.title.substr(0,20)+"..."}</h4>
           <h6>price:${cartitem.price}</h6>
           {cartitem.description}
           
           <button onClick={()=>dispatch({type:"ADD-CART", data:cartitem})}>Add To Cart</button>
           
        </div>
    );
   
};

