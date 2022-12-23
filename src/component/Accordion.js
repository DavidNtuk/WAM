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
        <div class="accordion pb-5" id="accordionPanelsStayOpenExample">
            <div class="accordion-item  bg-light">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Description
                </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body" dangerouslySetInnerHTML={{__html: description}}>
                    </div>
                </div>
            </div>
            <div class="accordion-item  bg-light">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                     Product Details
                </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                    <ul>
                        <li><strong>Product SKU:</strong> {product_sku} </li>
                        <li style={{ textTransform: 'capitalize' }}><strong>Stock:</strong> {stock} </li>
                        <li><strong>Category:</strong> {category?.title} </li>
                        <li><strong>Subcategory:</strong> {subcategory?.title} </li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="accordion-item  bg-light">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Reviews
                </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
        </>
       
   )
}

export default Accordion