import React from "react";

const AviationInput = props => {
  const handleSubmit = event => {
    event.preventDefault();

    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    props.onSubmit({
      flightNum: formData.get("flightNum"),
      aircraftReg: formData.get("aircraftReg")
    });

    currentTarget.reset();
  };

  return (
    <form className="AviationInput" onSubmit={handleSubmit}>
      <div className="avuserInput">
        <div className="fightNum">
          <label htmlFor="flightNum">Flight Num.</label> <br />
          <input name="flightNum" id="flightNum" />
        </div>
        <div className="aircraftReg">
          <label htmlFor="aircraftReg">Aircraft Reg.</label> <br />
          <input name="aircraftReg" id="aircraftReg" cols="60" rows="4" />
        </div>
      </div>
      
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default AviationInput;
