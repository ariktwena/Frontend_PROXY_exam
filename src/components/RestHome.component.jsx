import React from "react";

const RestHome = () => {
  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <h3 className="text-center">Rest</h3>
            <br />
            <p>
              All Persons: Fetch all data from Rest Api, and delete Persons
            </p>
            <p>Add Person: Add new Person through Rest Api connection</p>
            <p>Edit Person: Edit existing Person through Rest Api connection</p>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
};

export default RestHome;
