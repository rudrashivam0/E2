import { CDN_URL } from "../utils/constant";
//? ABOVE is the name import 

const RestaurantCard = (props) => {
    const { resData } = props;

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
        <div className="p-2 bg-gray-100 rounded-md border border-transparent hover:border-gray-400 hover:shadow-lg transition-all duration-200 w-full">
            <img className="rounded-md w-full h-[200px] object-cover "
                src={
                    CDN_URL +
                    cloudinaryImageId
                }
            />
            <h4>{name}</h4>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime} min</h4>
            {/* <h3>{locality} </h3> */}





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

export default RestaurantCard