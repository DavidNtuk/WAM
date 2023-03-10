import React from "react";
import "../App.css"


const HomeAccordion = () => {
    
    return(
       <div className="container-fluid">
            <div className="accordion pb-5" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        About Roli'S Accessories
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            This brand started out of the passion and love for taking outfit  to the next level with the use of jewelry, we admire making people look outstanding, unique and equisite when jewelry or Accessories are been used.When we talk about confidence Roli Accessories gives you luxirious and classy looks at all times.
                        </div>
                    </div>
                </div>
                <div className="accordion-item  bg-light">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Vision
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div className="accordion-body">
                        To sell and produce quality jewelries of different kinds and continous improvement as the year goes by.
                    </div>
                    </div>
                </div>
                <div className="accordion-item  bg-light">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Mission
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body">
                        Our mission here at Roli Accessories is to satisfy our customers from accross the nation.and in turn make our brand grow.
                    </div>
                    </div>
                </div>
            </div>
        </div>
       
   )
}

export default HomeAccordion