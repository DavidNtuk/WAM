import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardCategories from '../../component/DashboardCategories';
import Categoriesview from '../../component/Categoriesview';
import PromoSales from "../../component/PromoSales"


const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState('');
    const [selectedCategoryTitle, setSelectedCategoryTitle] = useState('');

    const fetchCategories = async () =>{
        try{
            const response = await axios.get('https://api-v1.devchris.com.ng/api/v1/users/category/list');
            const { categories } = response.data.data;
            setCategories(categories);
            if (categories.length > 0) {
                setSelectedCategoryId(categories[0].unique_id);
                setSelectedCategoryTitle(categories[0].title);
            }
        } catch (error){
            console.log(error);
        }
    };

    useEffect(() =>{
        fetchCategories();
    },[]);

    const handleCategoryChange = (uniqueId, title) => {
        setSelectedCategoryId(uniqueId);
        setSelectedCategoryTitle(title);
    };

   return(
    <>
        <div>
            <PromoSales />
        </div>
        <div className="container-fluid">
            <div className="row">
                <DashboardCategories categories={categories} selectedCategory={handleCategoryChange} /> 
                <Categoriesview categoryId={selectedCategoryId} categoryTitle={selectedCategoryTitle} />
            </div>
        </div>
    </>
       
   )
}

export default Categories;
