import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({

   name : 'cart',
   initialState : [],
   reducers : {

    add(state,action){
        state.push(action.payload);
    },  
    remove(state,action){
        // state;
    }
   }
});

export const {add,remove} = CartSlice.actions;          //actions are created
export default  CartSlice.reducer;                       // reducer is created 
