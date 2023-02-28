import React from "react";
import "../App.css"


const Accordion = ({ product }) => {
    const {
        description,
        stock,
        product_sku,
        category,
        subcategory
    } = product;
    
    return(
       <>
        <div className="accordion pb-5" id="accordionPanelsStayOpenExample">
            <div className="accordion-item  bg-light">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Description
                </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body" dangerouslySetInnerHTML={{__html: description}}>
                    </div>
                </div>
            </div>
            <div className="accordion-item  bg-light">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                     Product Details
                </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body">
                    <ul>
                        <li><strong>Product SKU:</strong> {product_sku} </li>
                        <li style={{ textTransform: 'capitalize' }}><strong>Stock:</strong> {stock} </li>
                        <li><strong>Category:</strong> {category?.title} </li>
                        <li><strong>Subcategory:</strong> {subcategory?.title} </li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="accordion-item  bg-light">
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Reviews
                </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
        </>
       
   )
}

export default Accordion