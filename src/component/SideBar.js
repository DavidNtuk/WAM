import React from "react";
// import images from "../Api/images";
import "../App.css";

const SideBar = ({ images, setSelectedImg}) => {
    return(
       <>
            {
                images.map((image, index) =>{
                    return(
                        <div className="p-3" key={index}>
                            <img 
                                src={image}
                                className="view-img" 
                                alt=''
                                onClick={() => setSelectedImg(image)}
                                style={{ width:70, height:70 }} 
                            />
                        </div>
                    )
                })
            }   
       </> 
   )
}

export default SideBar