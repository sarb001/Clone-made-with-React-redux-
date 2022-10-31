import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({

   name : 'cart',
   initialState : [],
   reducers : {

    add(state,action){
        state.push(action.payload);
    },  
    remove(state,action){
        return state.filter((itemnum) => itemnum.id !== action.payload); 
    }
   }
});

export const {add,remove} = CartSlice.actions;          //actions are created
export default  CartSlice.reducer;                       // reducer is created 
