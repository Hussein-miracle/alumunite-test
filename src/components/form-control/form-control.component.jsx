import React,{useState} from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';



import "./form-control.styles.scss";

const FormControlComp = ({id}) => {
  const [academy, setAcademy] = useState("Faith Academy");
  const [stillSchooling, setStillSchooling] = useState(true);

  const handleChange = (event) => {
    setAcademy(event.target.value);
  };

  return (
    <div className="input">

        <div className="input__select-container">
            <h6 className="input__select--title">Select a School you graduated from</h6>

            <select className="input__select" name="academy"  id="academy-select">
                <option className="input__select__option" value="Faith Academy">Faith Academy</option>
                <option className="input__select__option"  value="Mercy Academy">Mercy Academy</option>
                <option className="input__select__option"  value="Developers Academy">Developers Academy</option>
            </select>

            <h4 className="input__select--sub" >Can't find your school ? <span>Add your school to the list</span></h4>

        </div>




           <FormControlLabel id="radio" value={stillSchooling} control={<Radio />} label="Still schooling here presently" />
          

        <div className="date-container">
          <h4>Year Graduated</h4>
          <input type="date" id="graduation-date" placeholder="2012-10-20" value="2012-10-20"
       min="1000-01-01" max="2030-12-31"/>
          
        </div>
    </div>
  )
}

export default FormControlComp;