import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addProduct } from '../redux/slices/productSlice'
import { useDispatch,useSelector } from 'react-redux'

function Products() {


  const [name,setName]=useState()
  const [product,setProduct]=useState()
  const [price,setPrice]=useState()

  const users = useSelector((state)=>state.productReducer)
  console.log(users)

  const dispatch=useDispatch();

  const handleSubmit  = (event) => {
    event.preventDefault();
    dispatch(addProduct({id: users[users.length -1 ].id + 1 ,name,product,price}))
    navigate('/')
    
  }

  const navigate=useNavigate()

  const allProducts=()=>{
      console.log(product)
   
  }



  
  return (
    <>
    <form onSubmit={handleSubmit} >
    <div className='container'>
     <input type="text"  placeholder='Add Product Image' onChange={e=>setName(e.target.value)} className='form-control'/>
     <input type="text"  placeholder='Enter Product Name' onChange={e=>setProduct(e.target.value)} className='form-control'/>
     <input type="text"  placeholder='Enter Product Price' onChange={e=>setPrice(e.target.value)} className='form-control'/>
     <div>
      <button onClick={allProducts}>Add</button>
      {/* <button>Add</button> */}

     </div>
     </div>
     </form>
    </>
  )
}

export default Products