import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { deleteProduct } from '../redux/slices/productSlice';


function Home() {
  const users = useSelector((state)=>state.productReducer);

  const dispatch=useDispatch()
  
  return (
    <>
    <div className="row m-2 p-5">
        <div className="col-10">
            <h3>Products</h3>
            {
              users?.length>0?
              <table className="table table-bordered">
                <thead>
                     <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th></th>
                        <th></th>
                     </tr>
                </thead>
                <tbody>

                  {
                    users?.map((item,index)=>(
                      
                      <tr>
                      <td>{item.id}</td>
                      <td>
                        <img src={item.name} alt="" className="img-fluid" />
                      </td>
                      <td>{item.product}</td>
                      <td>$ {item.price}</td>
                      <td>
                        <button className='btn btn-light' onClick={()=>{ dispatch(deleteProduct({id:item.id}))}}>
                        <i className="fa-solid fa-trash"  style={{color: "#ff0000",}} />
                        </button>
                        </td>
                        <div className="btn btn-light">                     
                           <Link to={`/edit/${item.id}`}><i className="fa-solid fa-pen-to-square fa-xl    " style={{color: "#005eff",}} /></Link>
                        </div>
                    </tr>
                    ))
                  } 
                  </tbody>
                  </table>
                   :
                   <h3 className='d-flex text-align-center justify-content-center text-danger'>No Products</h3>
            }

                                     
                
           <div >
            <Link to={'/pro'} className='btn btn-primary'>Add Product</Link>
           </div>
          
        </div>
    </div>
    </>
  )
}

export default Home