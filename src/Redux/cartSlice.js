import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState ={
    cartItems: localStorage.getItem("cartItems") 
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
    cartTotalQuantity:0,
    cartTotalAmount:0,
}

const cartSlice= createSlice({
        name : 'cart',
        initialState,
        reducers:{
            addToCart(state,action){

               const itemInex = state.cartItems.findIndex((item) => item.id === action.payload.id);
                if(itemInex >=0){
                    state.cartItems[itemInex].cartQuantity +=1
                    toast.info(`Increased ${state.cartItems[itemInex].productName} quantity`,{
                        position:'bottom-left'
                    })
                }else{
                    const tempProduct = { ...action.payload,cartQuantity:1}
                    state.cartItems.push(tempProduct);
                    toast.success(`${action.payload.productName} added to cart`,{
                        position:'bottom-left'
                    });
                }
                
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            },

            removeFromCart(state,action){
                const nextCartItems = state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
                
                state.cartItems = nextCartItems;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            },
            
            decreaseCart(state,action){
                const itemIndex = state.cartItems.findIndex(
                    cartItem=>cartItem.id === action.payload.id
                )

                if(state.cartItems[itemIndex].cartQuantity >1){
                    state.cartItems[itemIndex].cartQuantity -=1;
                }else if (state.cartItems[itemIndex].cartQuantity ===1){
                    const nextCartItems = state.cartItems.filter(
                        cartItem => cartItem.id !== action.payload.id
                    )
                    
                    state.cartItems = nextCartItems;
                    
                }
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            },

            increaseCart(state,action){
                const itemInex = state.cartItems.findIndex((item) => item.id === action.payload.id);
                if(itemInex >=0){
                    state.cartItems[itemInex].cartQuantity +=1
                }else{
                    const tempProduct = { ...action.payload,cartQuantity:1}
                    state.cartItems.push(tempProduct);
                }
                
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            },

            clearCart(state,action){
                state.cartItems = []

                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

            },
            
            getTotals(state, action) {
                let { total, quantity } = state.cartItems.reduce(
                  (cartTotal, cartItem) => {
                    const { productPrice, cartQuantity } = cartItem;
                    
                    const itemTotal = productPrice * cartQuantity;
          
                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;
          
                    return cartTotal;
                  },
                  {
                    total: 0,
                    quantity: 0,
                  }
                );
                state.cartTotalQuantity = quantity;
                state.cartTotalAmount = total;
              }
        }
    
    })

// const fetchFromLocalStorage = ()=>{
//     let cart = localStorage.getItem('cart');
//     if(cart){
//         return JSON.parse(localStorage.getItem('cart'));
//     }else{
//         return []
//     }
// }

// const storeInLocalStroage = (data)=>{
//     localStorage.setItem('cart', JSON.stringify(data))
// }

// const initialState={
//     carts: fetchFromLocalStorage(),
//     itemCount:0,
//     totalAmount:0
// }

// const cartSlice= createSlice({
//     name : 'cart',
//     initialState,
//     reducers:{
//         addToCart:(state,action)=>{
//             const isItemCart = state.carts.find(item => item.id === action.payload.id)

//             if(isItemCart){
//                 const tempCart = state.carts.map(item =>{
//                     if(item.id === action.payload.id){
//                         let tempQty=item.quantity + action.payload.quantity;
//                         let tempTotalPrice = tempQty + item.price

//                         return{
//                             ...item,quantity:tempQty , tempTotalPrice
//                         }
//                     }else{
//                         return item
//                     }
//                 })

//                 state.carts = tempCart;
//                 storeInLocalStroage(state.carts)
//             }else{
//                 state.carts.push(action.payload)
//                 storeInLocalStroage(state.carts)
//             }
//         }
//     }

// })

export const {addToCart , removeFromCart,decreaseCart,increaseCart,clearCart,getTotals} = cartSlice.actions
export default cartSlice.reducer

