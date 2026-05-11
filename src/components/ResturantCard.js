import { CDN_URL } from "../utils/constant";
//? ABOVE is the name import 

const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime
    } = resData?.data;


    //! props.resData.data.name ==== props ascess objecy direct from ythis 


    //! DEStructring ON the fly its called 
    //    const { resName, cuisines, rating, time } = pro;
    // console.log(props)
    return (
        <div className="res-Card">
            <img className="res-logo"
                src={
                    CDN_URL +
                    cloudinaryImageId
                }
            />

            <h3>{name}</h3>
            <h4>{cuisines.join(",  ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} min</h4>





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