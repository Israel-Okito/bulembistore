// import { createSlice } from '@reduxjs/toolkit'

// export const reserverSlice = createSlice({
//   name: 'reserver',
//   initialState: {
//     products:[],
//   },
//   reducers: {
//     addToReserver: (state,action) => {
//     const item = state.products.find(item=>item.id === action.payload.id);

//     if(item){
//         item.quantity+=action.payload.quantity;
//     }else{
//         state.products.push(action.payload);
//     }
    
    
     
//     },
//     removeItem: (state, action) => {
//       state.products=state.products.filter(item=>item.id !== action.payload)
//     },
//     resetCart: (state, action) => {
//         state.products = []
//     }
//   }
// })

// // Action creators are generated for each case reducer function
// export const { addToReserver, removeItem, resetCart} = reserverSlice.actions

// export default reserverSlice.reducer