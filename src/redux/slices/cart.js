import { createSlice } from "@reduxjs/toolkit"




const  initialState={
    cartList:[],
    cartCount:0,
    total:0

}


const cartSlice=createSlice({

    name:"cart",
    initialState,
    reducers:{

        addToCart:(state,action)=>{
            
            state.cartList.push({...action.payload,
                count:1
            })
        
        },

       increment:(state,action)=>{
         
          state.cartList=state.cartList?.forEach(item=>{
            
            if(item?.idMeal===action.payload){
                item.count++
               
            }
          })
               
     
       },

       decrement:(state,action)=>{
        state.cartList=state.cartList?.forEach(item=>{
            
            if(item?.idMeal===action.payload){
                item.count--
               
            }
          })
      
       },
       deleteIteam:(state,action)=>{

        state.cartList=state.cartList.filter(iteam=>{
            if(iteam.idMeal!==action.payload){
                return iteam
            }
        })
       }

    }
})



export const {addToCart,increment,decrement,deleteIteam}=cartSlice.actions

export default cartSlice.reducer