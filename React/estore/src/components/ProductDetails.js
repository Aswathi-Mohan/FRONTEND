import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ArrowLeftCircle } from 'react-feather'


function ProductDetails() {
  const [product, setproduct] = useState({})
  const { productId } = useParams()
  // console.log(productId);
  const navigate = useNavigate()

  useEffect(() => {
    getProductDetails()
  }, [])

  const getProductDetails = async () => {
    const { data } = await axios(`https://fakestoreapi.com/products/${productId}`)
    console.log(data)
    setproduct(data)
    
  }
  console.log(product)
  return (
    <div className='container'>
      <div className='row my-5'>
        <div className='col-4'>
          <ArrowLeftCircle size="30" onClick={() => { navigate(-1) }} />

        </div>
        <div className='col-4'>
          <h3 className='text-center'>Product Details</h3>
        </div>
        <div className='col-4'></div>

      </div>


      {
        Object.keys(product) ? (          
            <div className="card mb-3 shadow">
              <div className="row g-0">
                <div className="col-md-4">
                  <div className='d-flex justify-content-center align-items-center py-2'><img src={product.image} className="img-fluid rounded-start " alt="..." style={{height:"300px"}} /></div>                 

                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product.title} </h5>
                    <p>{product.category}</p>
                    {/* <p>{product.rating.rate} {product.rating.count}</p> */}
                    <h3 className='font-weight-bold py-3'>$ {product.price}</h3>
                    <h6 className='pt-3'>Description</h6>
                    <p className="card-text pb-5">{product.description}</p>
                  </div>
                  <div className='mb-5'>
                    <button className='btn btn-primary rounded-0 mx-3'>Add To Cart</button>
                    <button className='btn btn-secondary rounded-0'>Buy Now</button>
                    
                  </div>
                </div>
              </div>
            </div>          
        ) : (<p className='text-center'>Loading...</p>)
      }


    </div>
  )
}
export default ProductDetails