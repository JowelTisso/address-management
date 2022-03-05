import React from "react";
import "./SavedAddress.css";

const SavedAddress = ({ data, toggleModal, toggleEditMode }) => {
  const { name, mobile, address, pin, city, state, landmark } = data;
  return (
    <div className="savedAddressContainer border mg-top-2x">
      <div className="name-container">
        <p className="t4">{name}</p>
        <p className="t4">{mobile}</p>
      </div>
      <p className="address t5 mg-top-2x">
        {address}, {landmark}, {city}, {state} {pin}
      </p>
      <div className="menu-container">
        <button className="pointer mg-right-2x" onClick={toggleEditMode}>
          <ion-icon name="create-outline"></ion-icon>
        </button>
        <button className="pointer" onClick={toggleModal}>
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default SavedAddress;
