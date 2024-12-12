import React, { useState, useEffect } from 'react'
import { Link,useParams } from 'react-router-dom';

const Products = () => {
  const [usersData, setUsersData] = useState([])

  useEffect(() => {
    getUsersData();
  }, [])

  const getUsersData = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setUsersData(data)
    console.log(usersData);
  };



  return (
    <center>
      <h2 className='my-4'>Productss</h2>
      <div className="row col-md-12 container my-5">
        {usersData && usersData.length > 0 ? (
          usersData.map((user) => (
            <div className="card cardstyle mx-2 my-3" style={{ width: "15rem", height: "18rem" }}>
              <Link to={`/productDetails/${user.id}`}>
                <img src={user.image} className="card-img-top" style={{ width: "150px", height: "100px" }} />
                <div className="card-body">
                  <h6 className="card-title">{user.title}</h6>
                     {/* <p className="card-text py-3">{user.category}{user.rating.rate}</p> */}
                  <a href="#" className="btn btn-primary my-3 position-absolute bottom-0 start-50 translate-middle-x">Add to Cart</a>
                </div>
              </Link>
            </div>

          ))
        ) : (<p>Loading...</p>)
        }
      </div>

    </center>
  )
}
export default Products