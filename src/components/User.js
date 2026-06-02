import React, { useEffect } from 'react'

const User = (props) => {

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("inside the User Fucn comp ");
        }, 1000)

        return () => {
            clearInterval(timer);
            console.log("insise the return of useEffect")
        }
    }, [])

    return (
        <div className='user-card'>
            <h2>
                Name:{props.name}
            </h2>
            <h3>Location :Varanasi</h3>
            <h3>This is User Details</h3>
        </div>
    )
}

export default User