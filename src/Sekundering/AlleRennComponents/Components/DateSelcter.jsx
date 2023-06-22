import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./søkMedDato.css";

function DateSelector({ setDag, setIsChecked, isChecked, dag }) {
  const handleDateChange = (date) => {
    setDag(date);
  };
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="date-selector">
      <div className="checkbox-div">
        <label className="container-checkbox">
          <input
            className="my-checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className="checkmark"></span>
          Søk med dato
        </label>
      </div>
      <div className="date-item">
        {isChecked && (
          <>
            <p className="date-label-two">Velg hvilken dag konkurannsen er:</p>
            <DatePicker
              selected={dag}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default DateSelector;
