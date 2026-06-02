import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

const useResturantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);


    //? Job is to return the resturant Information from the fetching the API 

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch(MENU_URL + resId);

        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
        console.log(resInfo);
    }
    return resInfo;
}


export default useResturantMenu




// console.log(parems)

// useEffect(() => {
//     fetchMenu();
// }, []);
