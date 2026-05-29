import { Link, useRouteError } from "react-router-dom"

const Error = () => {
    //? usedRouteError proiide by react router to handle errors 
    
    const err = useRouteError();

    console.log(err);
    return (
        <div className="error-page">
            <h1>Oops!!!</h1>
            <h3>{err.status}:{err.statusText}</h3>
            <h2>Something went wrong</h2>
        </div>
    )
}

export default Error