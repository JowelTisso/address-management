import React from "react";
import "./SavedAddress.css";

const SavedAddress = ({ toggleModal, toggleEditMode }) => {
  return (
    <div className="savedAddressContainer border mg-top-2x">
      <div className="name-container">
        <p className="t4">Jowel Tisso</p>
        <p className="t4">8877887788</p>
      </div>
      <p className="address t5 mg-top-2x">
        1904 Patterson Street, Houston,TX-77063 1904 Patterson Street,
        Houston,TX-77063
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
