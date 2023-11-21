import React from "react";

const Image =  () => {
    return (
        <div id="profilePic">
            <img 
             src={process.env.PUBLIC_URL + "/Erin-portfolio-pic.jpg"}
            // src="/Erin-portfolio-pic.jpg"
            alt="smiling selfie" 
            />
        </div>
    )

}

export default Image;