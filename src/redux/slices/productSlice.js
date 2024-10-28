import { createSlice } from "@reduxjs/toolkit";
import {ProductData} from "../Data"

const productSlice=createSlice({
    name:'products',
    initialState:ProductData,
  //   {
  //   users:ProductData
  // },
  reducers:{
    addProduct:(state,action)=>{
      console.log(action)
        state.push(action.payload)
    },
    deleteProduct:(state,action)=>{
      const {id}=action.payload
      return state.filter(product=>product.id !==id)
    
  },

    edit:(state,action)=>{
      const {id,name,product,price}=action.payload
      const pro = state.find(user=>user.id==id);
      if(pro){
        pro.name=name;
        pro.product=product;
        pro.price=price
      }
      else{

      }
    }
}
})

export default productSlice.reducer
export const {addProduct,deleteProduct,edit}=productSlice.actions