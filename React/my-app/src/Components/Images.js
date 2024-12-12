import React, {useEffect, useState} from 'react'

const Images = () => {
    const [usersData, setUsersData] = useState([])
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(() => {
        getUsersData();
    }, [pageNumber])

    const getUsersData = async () => {
        const response = await fetch(
          `https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`,
          {
            method: "GET",
            headers: {
              "app-id": "633e33e98efd49504c9c7643",
            },
          }
        );
    
        const {data} = await response.json();
        setUsersData(data)
      };

     const handlePrev=async ()=>{

        const response = await fetch(
          `https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`,
          {
            method: "GET",
            headers: {
              "app-id": "633e33e98efd49504c9c7643",
            },
          }
        );
    
        const {data} = await response.json();
        setUsersData(data)
        setPageNumber(pageNumber-1)

      }

    const handleNext=async ()=>{
      const response = await fetch(
        `https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`,
        {
          method: "GET",
          headers: {
            "app-id": "633e33e98efd49504c9c7643",
          },
        }
      );
  
      const {data} = await response.json();
      setUsersData(data)
      setPageNumber(pageNumber+1)
      }

  return (
    <center>
        <h2>UseeffectPagination</h2>
        <div className="row">
          {usersData && usersData.length > 0 ? (
            usersData.map((user) => (
              <div className="col-md-6">
                <div className="card mt-2">
                  <div className="row">
                    <div className="col-md-3">
                      <img style={{width:"100px",height:"100px"}} src={user.picture} alt={user.firstName} />
                    </div>
                    <div className="col-md-8">
                      <p>{user.id}</p>
                      <p>
                        {user.title} {user.firstName} {user.lastName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>loading ...</p>
          )}
        </div>
        <div className="text-center">
          <button className='btn btn-primary mx-2' onClick={handlePrev}>Previous</button>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              className="btn btn-primary me-3 my-4"
              onClick={() => {
                setPageNumber(num)
              }}
            >
              {num}              

            </button>
            
          ))}
          <button className='btn btn-primary' onClick={handleNext}>Next</button>
        </div>
    </center>
  )
}

export default Images