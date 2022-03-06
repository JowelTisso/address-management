import React from "react";
import "./SavedAddress.css";
import { useAddress } from "../../context/address-context";

const SavedAddress = ({
  data,
  toggleModal,
  toggleEditMode,
  getSelectedAddressId,
  closeNewAddressField,
}) => {
  const { id, name, mobile, address, pin, city, state, landmark } = data;

  const { setSelectedAddress } = useAddress();

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
        <button
          className="pointer mg-right-2x"
          onClick={() => {
            closeNewAddressField();
            toggleEditMode();
            setSelectedAddress(data);
          }}
        >
          <ion-icon name="create-outline"></ion-icon>
        </button>
        <button
          className="pointer"
          onClick={() => {
            toggleModal();
            getSelectedAddressId(id);
          }}
        >
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default SavedAddress;
