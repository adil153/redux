import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { edit } from '../redux/slices/productSlice'




function Edit() {

    const {id}=useParams()
    const user=useSelector((state)=>state.productReducer)

    const existingProduct=user.find((item)=>item.id==id)
    // const {name,product,price} = existingUser[0];
    const [uname,setName]=useState(existingProduct ? existingProduct.name : '')
    const [uproduct,setProduct]=useState(existingProduct ? existingProduct.product : '')
    const [uprice,setPrice]=useState(existingProduct ? existingProduct.price : '')

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleUpdate=(event)=>{
        event.preventDefault()
        dispatch(edit(
            {
                id:id,
                name:uname,
                product:uproduct,
                price:uprice
            }
        ))
        navigate('/')

    }

  return (
    <div className='d-flex justify-content-center align-item-center edit-bg vh-100 mt-5'>
        <div className='w-90 p-5 shadow border'>
            <h3>Edit Product</h3>
            <form onSubmit={handleUpdate}>
            <div >
                <label htmlFor="image" className="text-light">Image:</label>
                <input value={uname} onChange={(e)=>{setName(e.target.value)}} type="text" name="" className='form-control' placeholder='Enter Image Url' />
            </div>
            <div>
                <label htmlFor="product" className="text-light">product:</label>
                <input value={uproduct} onChange={(e)=>{setProduct(e.target.value)}} type="text" name="" className='form-control' placeholder='Enter Product Name' />
            </div>
            <div>
                <label htmlFor="price" className="text-light">price:</label>
                <input value={uprice} onChange={(e)=>{setPrice(e.target.value)}} type="text" name="" className='form-control' placeholder='Enter Product Price' />
            </div>
            <div>
                <Link to={'/'} className='btn btn-secondary'>Cancel</Link>
                <button className="btn btn-primary" >Update</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Edit