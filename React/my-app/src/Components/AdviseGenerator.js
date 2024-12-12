import React, { useEffect, useState } from 'react'


function AdviseGenerator() {
    const [usersData, setUsersData] = useState([])
    useEffect(() => {
        getUsersData();
    }, [])

    const getUsersData = async () => {
        const response = await fetch(
            `https://api.adviceslip.com/advice`,
            {
                method: "GET",
            }
        );

        const data = await response.json();
        setUsersData(data.slip.advice)
        // console.log(data.slip.advice);
    };

    return (
        <div>
            <h2 className='pt-5'>Advise Generator</h2>
            <p className='text-center p-5'>{usersData}</p>
            <button className='btn btn-primary pt-3 p-3' onClick={() => { getUsersData() }}>New Advice</button>
        </div>
    )
}
export default AdviseGenerator