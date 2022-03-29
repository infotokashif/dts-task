
export const groupReducer=(state={product:[],cart:[],selectedProd:[]},action)=>{

    if(action.type==="ADD-PRODUCT"){
        return {...state, product:[...action.data, ...state.product]}
    }
    if(action.type==="SELECTED-PRODUCT"){
        return {...state, selectedProd:[action.data]}
    }
    if(action.type==="ADD-CART"){
        return {...state, cart:[{...action.data, key: state.cart.length},...state.cart]}
    }
    if(action.type==="REMOVE-PRODUCT"){
        const filterdproduct= state.cart.filter((item)=>item.key!== action.data.key);
        return {...state, cart:filterdproduct}
        //  OR======>>>>>>>>  cart:filterproduct
    }
    return state
    
};