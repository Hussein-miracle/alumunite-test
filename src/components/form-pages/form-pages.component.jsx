import React from 'react';

import "./form-pages.styles.scss";
import {ReactComponent as GraduationCap} from "../../assets/cap.svg"
import sprite from "../../assets/sprite.svg"
import FormControl from "../form-control/form-control.component"

const FormPages = () => {
  return (
    <div className="form-pages">
        <h1 className="form-pages__title">School Information</h1>

        <FormControl key={1} id="1"/>
        <FormControl key={2} id="2"/>

          <div className="add-school">
            <div className="add-school__content">
              <GraduationCap className="add-school__logo" />
              
              <div className="add-school__details">
                <h2 className="add-school__details--title">Add another school</h2>
                <p className="add-school__details--sub">More schools more connections</p>
              </div>
            </div>
            
            <svg className="add-school__btn">
                    <use href={`${sprite}#icon-add_circle_outline`}></use>     
            </svg>
            

          </div>

          <button className="form-pages__btn">Submit</button>
      
    </div>
  )
}

export default FormPages;