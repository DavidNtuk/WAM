import React from "react";
// import Home from "./Home/Home";
// import contact from "../../src/img/contact.jpg"
import "../App.css";
import "../component/Header/custom.css";

const DashboardCategories = ({
    categories,
    selectedCategory
}) => {

    const handleCategorySelect = (uniqueId) => {
        selectedCategory(uniqueId);
    };

    return (
        <div className="col-md-3">
            <div className="dashboardcategories">
                <h3 className="pt-2 text-start px-3">Categories</h3>      
                <div className="pt-3">
                    {
                        categories.map(({ title, unique_id }) => {
                            return (
                                <div key={unique_id} className=" px-3 cursor drop-down-dashboard categories-list" onClick={() => handleCategorySelect(unique_id, title)}>
                                    <h6 className="d-inline-block">{title}</h6>
                                </div>
                            )
                        })
                    }
                    <div className="border-bottom pt-4"></div>                 
                </div>
            </div>     
        </div>
    );
}

export default DashboardCategories