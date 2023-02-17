import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";


const store = configureStore({
      reducer:{
        cart:cartSlice
      }
})

export default store;













/**
 * CREATE store 
 *    -configureStore()-RTK(API used)
 * 
 *provide my store to app
 *    -<Provider store ={store}>-import from react-redux
 * 
 * to create slice
 *  -RTK - CreateSlice({
 *            name: "",
 *            initialState:
 *            reducers{
 *             addItem: (state,action) =>{state = action.payload}
 * }
 * 
 * })
 * export const{addItem,removeItem} =cartSlice.actions;
 * export default cartSlice.reducer;
 * 
 * put that slice into Store
 *           -{
 *                reducer:{
 *                  cart:cartSlice,
 *                   user:userSlice
 * }
 * }
 */


     