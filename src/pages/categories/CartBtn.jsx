import React from 'react'

const CartBtn = () => {

const [addToCartBtn,setAddToCartBtn]=useState("Add To Cart")

    setAddToCartBtn((pre)=>{

        if(pre==="Add To Cart"){
          return "Adedd To Cart"
        }else{
          return "Add To Cart"
        }
      })
    }

  return (
    <div>
      



    </div>
  )
}

export default CartBtn
