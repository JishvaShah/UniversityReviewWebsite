import React, {useEffect, useState} from 'react'
import "./favList.css";
import {Link} from "react-router-dom";
import {getRecommendUni, getFavByUserId,getUniByID} from "../../service/allServices";
// import image from '../../../../public/images/school.jpeg'
import placeHolderUni from '../../Data/univeristy.json'



const FavCard = ({uniID, userId}) => {
    const [university, setUniversity] = useState( {});

    useEffect(() => {
        getUniByID({id: uniID})
            .then(res => {
                // console.log("single uni:" + JSON.stringify(res.data));
                if (res.data) {
                    setUniversity(university => res.data);
                    university.photo = "../../../../public/images/school.jpeg";
                }
            })
            .catch(e => console.log(e));

    }, []);


    return (

        <Link to={`/profile/${university.id}`}>
            <li className="nav-item text-center align-items-center mx-2 wd-follower flex">
                <img className="wd-following-user-img"
                     src='../../../../public/images/school.jpeg' alt=""/>

                <p className="nav-link btn btn-outline-primary px-0 align-self-center wd-button-transparent">
                    {university.name}
                </p>
            </li>
        </Link>
    )
}

export default  FavCard;