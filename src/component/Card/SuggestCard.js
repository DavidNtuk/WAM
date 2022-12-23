import React from "react";
import "../../App.css"
import "../../component/Header/custom.css"
// import cardlist from "../../Api/cardimages"
import Carditem from "./CardItem";
import images from '../../Api/images';



const SuggestCard = () => {

   return(
       <div className="suggest-card d-flex justify-content-center mb-5">
           {
               images.map(({id, src, productName, price }) =>{
                   return(
                        <Carditem 
                        id={id}
                        src={src}
                        productName={productName}
                        price={price}
                        />
                   )
               })
           }
        </div>
       
   )
}

export default SuggestCard