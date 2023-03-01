import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardCategories from '../../component/DashboardCategories';
import Categoriesview from '../../component/Categoriesview';
import PromoSales from "../../component/PromoSales"


const Categories = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const productId = location.pathname.split("/")[2];

    console.log(productId)

   return(
    <>
        <div>
            <PromoSales />
        </div>
        <div className="row">   
            <DashboardCategories /> 
            <Categoriesview />  
        </div>
    </>
       
   )
}

export default Categories