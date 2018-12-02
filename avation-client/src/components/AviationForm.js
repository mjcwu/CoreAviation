import React from "react";

const AviationForm = props => {
  const handleSubmit = event => {
    event.preventDefault();

    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    props.onSubmit({
      FlightNumber: formData.get("FlightNumber"),
      AircraftReg: formData.get("AircraftReg")
    });

    currentTarget.reset();
  };

  return (
    <form className="AviationForm" onSubmit={handleSubmit}>
      <div className="InputForm">
        <div>
          <label htmlFor="Flight Number">Flight Number</label> <br />
          <input name="FlightNumber" id="FlightNumber" />
        </div>
        <div>
          <label htmlFor="AircraftReg">AircraftReg</label> <br />
          <input name="AircraftReg" id="AircraftReg" cols="60" rows="4" />
        </div>
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default AviationForm;