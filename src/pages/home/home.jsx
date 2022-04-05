import React from "react";
import {Routes,Route} from "react-router-dom";
import FormPages from "../../components/form-pages/form-pages.component";
import FormRoutes from "../../components/form-routes/form-routes.component";
import "./home.styles.scss";

const Home = () => {
    return(
        <div className="home">

            <FormRoutes/>
            <FormPages/>
            
        </div>
    )
}

export default Home;