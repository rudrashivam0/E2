import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
//? ABOVE is the name import
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {

    const { loggedInUser } = useContext(UserContext);


    const { resData } = props; 
    // console.log(resData);

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,
        locality
    } = resData?.info || {};


    //! props.resData.data.name ==== props ascess objecy direct from ythis 


    //! DEStructring ON the fly its called 
    //    const { resName, cuisines, rating, time } = pro;
    // console.log(props)
    return (
        <div data-testid="rescard" className="p-2 bg-gray-100 rounded-md border border-transparent hover:border-gray-400 hover:shadow-lg transition-all duration-200 w-full">
            <img className="rounded-md w-full h-[200px] object-cover "
                src={
                    CDN_URL +
                    cloudinaryImageId
                }
            />
            <h4 className="text-sm truncate">
                {(name).split(" ").slice(0, 7).join(" ")}
            </h4>
            <h4 className="text-gray-600 text-sm truncate">
                {cuisines?.join(", ")}
            </h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime} min</h4>
            {/* <h3>{locality} </h3> */}

            <h1>
                {loggedInUser}
            </h1>






            {/* //? Ascess object  direct from the props  */}
            {/* <h3>{props.resData.data.name}</h3> */}


            {/* //? Destructuring ascesssing as props */}
            {/* <h3>{resName}</h3>
            <h4>{cuisines}</h4>
            <h4>{rating}</h4>
            <h4>{time}</h4> */}

        </div>
    )
}

//? HIgher Or der Component 
//! input  -> ResturantCard ==> ResturantCard Promoted 

export const withPromot = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard