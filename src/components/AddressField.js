import React, { useState } from "react";
import "./AddressField.css";

const AddressField = ({ toggleAddingAddress }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    pin: "",
    city: "",
    state: "",
    landmark: "",
  });

  const [formValidation, setFormValidation] = useState({
    name: true,
    mobile: true,
    address: true,
    pin: true,
    city: true,
    state: true,
    landmark: true,
  });

  const updateFormData = (target, key) => {
    setFormData((formData) => ({ ...formData, [key]: target.value }));
  };

  const submitForm = () => {
    ["name", "mobile", "address", "pin", "city", "state", "landmark"].map(
      (field) => {
        formData[field].length > 0
          ? setFormValidation((validation) => ({
              ...validation,
              [field]: true,
            }))
          : setFormValidation((validation) => ({
              ...validation,
              [field]: false,
            }));
      }
    );
  };

  return (
    <div className="AddressFieldContainer mg-top-2x">
      <p className="t4">Add a new address</p>
      <main className="grid mg-top-2x">
        <div className="input-container mg-bottom-3x">
          <input
            type="text"
            className="input-simple"
            placeholder="Name"
            onChange={({ target }) => updateFormData(target, "name")}
          />
          {!formValidation.name && (
            <p className="input-val val-error">Please fill your name</p>
          )}
        </div>

        <div className="input-container mg-bottom-3x">
          <input
            type="tel"
            className="input-simple"
            placeholder="Mobile"
            onChange={({ target }) => updateFormData(target, "mobile")}
          />
          {!formValidation.mobile && (
            <p className="input-val val-error">Please fill your mobile</p>
          )}
        </div>

        <div className="input-container mg-bottom-3x input-address">
          <textarea
            className="input-simple input-area"
            placeholder="Address"
            onChange={({ target }) => updateFormData(target, "address")}
          />
          {!formValidation.address && (
            <p className="input-val val-error">Please fill your address</p>
          )}
        </div>

        <div className="input-container mg-bottom-3x">
          <input
            type="number"
            className="input-simple"
            placeholder="Pin"
            onChange={({ target }) => updateFormData(target, "pin")}
          />
          {!formValidation.pin && (
            <p className="input-val val-error">Please fill your pin</p>
          )}
        </div>

        <div className="input-container mg-bottom-3x">
          <input
            type="text"
            className="input-simple"
            placeholder="City/District/Town"
            onChange={({ target }) => updateFormData(target, "city")}
          />
          {!formValidation.city && (
            <p className="input-val val-error">Please fill your city</p>
          )}
        </div>

        <div className="input-container mg-bottom-3x">
          <input
            type="text"
            className="input-simple"
            placeholder="State"
            onChange={({ target }) => updateFormData(target, "state")}
          />
          {!formValidation.state && (
            <p className="input-val val-error">Please fill your state</p>
          )}
        </div>

        <div className="input-container mg-bottom-3x">
          <input
            type="text"
            className="input-simple"
            placeholder="Landmark"
            onChange={({ target }) => updateFormData(target, "landmark")}
          />
          {!formValidation.landmark && (
            <p className="input-val val-error">Please fill your landmark</p>
          )}
        </div>
      </main>
      <button className="btn btn-primary" onClick={submitForm}>
        Save
      </button>
      <button
        className="btn btn-secondary mg-left-2x"
        onClick={toggleAddingAddress}
      >
        Cancel
      </button>
    </div>
  );
};

export { AddressField };
