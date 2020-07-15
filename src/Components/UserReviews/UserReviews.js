import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"
const UserReviews = () => {
    return (
        <React.Fragment>
            <div className="review-stars">
             <FontAwesomeIcon className="text-warning" icon={faStar}/>
             <FontAwesomeIcon className="text-warning" icon={faStar}/> 
             <FontAwesomeIcon className="text-warning" icon={faStar}/>
              <FontAwesomeIcon className="text-warning" icon={faStar}/>
             </div>
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, iure velit soluta tempore iusto delectus, magnam
              doloribus dignissimos qui aperiam ad! Blanditiis perferendis
              tenetur minus optio voluptates dolores qui quisquam.
            
        </React.Fragment>
    )
}

export default UserReviews
