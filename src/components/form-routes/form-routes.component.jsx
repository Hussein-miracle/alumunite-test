import React,{useState} from 'react'
// import "react-stepi-bar/styles.css";
import {Link} from "react-router-dom";
// import { ProgressBar,Step } from "react-stepi-bar";
import "./form-routes.styles.scss";
import Logo from "../../assets/images/alum-logo.png";
import LayerImg from "../../assets/images/alum-layer.png";
import sprite from "../../assets/sprite.svg"

const FormRoutes = () => {
    const [activeLink,setActiveLink] = useState(1);
    const [curLink,setCurLink] = useState(true);
    console.log(activeLink)
    if(activeLink > 2){
        setActiveLink(2);
    }

  return (
    <div className="form-routes">
        <div className="form-routes__header">
            <img src={`${Logo}`} alt="Alumunite Logo" />
        </div>
        <div className="form-routes__content">
            <h2 className="form-routes__content--title">
                <svg>
                    <use href={`${sprite}#icon-arrow-left`}></use>     
                </svg>
                Back to login 
            </h2>


            <div className="form-routes__content--main">

            <div className="route-links" onClick={() => setActiveLink(activeLink+1)}>

                <div className="route-progress">


                </div>


                {/* <Link to="#"> */}
                    <div className="route-link active">
                        <div className="route-link__icon">
                            <svg>
                                <use href={`${sprite}#icon-check`}></use>
                            </svg>
                            <span>1</span>
                        </div>
<div className="route-link__content">
                        <h3 className="route-link__content--title">PERSONAL DATA</h3>
                        </div>


                    </div>
                {/* </Link> */}
                {/* <Link to
                ="/"> */}
                    <div className="route-link">
                    <div className="route-link__icon">
                        <svg>
                            <use href={`${sprite}#icon-check`}></use>
                        </svg>
                         <span>2</span>
                    </div>
                    <div className="route-link__content">
                        <h3 className="route-link__content--title">ALUMNI DATA</h3>
                        
                            <p className="route-link__content--details">Select account type to customise your Alumni experience</p>
                    
                    </div>
                </div>
                {/* </Link> */}
                
                
                
                    
                    
            </div>
            



                <div className="form-routes__content--main-img-container">
                    <img src={LayerImg} alt="Layer img"/>
                </div>

                
            </div>

            
        </div>


    </div>
  )
}

export default FormRoutes;