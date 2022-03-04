import React, { useState } from "react";
import "./App.css";
import { AddressField } from "./components/AddressField";
import SavedAddress from "./components/SavedAddress";

function App() {
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const [isEditActive, setIsEditActive] = useState(false);

  const toggleModal = () => {
    setIsModalActive((state) => !state);
  };

  const toggleAddingAddress = () => {
    setIsAddingAddress((state) => !state);
  };

  const toggleEditMode = () => {
    setIsEditActive((state) => !state);
  };

  return (
    <div className="App flex-center">
      <div className="addressContainer">
        <p class="t3">Manage Address</p>
        {!isAddingAddress ? (
          <button
            className="addAddressContainer pointer mg-top-2x"
            onClick={toggleAddingAddress}
          >
            <p className="t4">
              <span className="t4">+ </span>
              ADD A NEW ADDRESS
            </p>
          </button>
        ) : (
          <AddressField toggleAddingAddress={toggleAddingAddress} />
        )}

        {isEditActive ? (
          <AddressField toggleAddingAddress={toggleEditMode} />
        ) : (
          <SavedAddress
            toggleModal={toggleModal}
            toggleEditMode={toggleEditMode}
          />
        )}
      </div>
      {isModalActive && (
        <div id="modal" class="modal">
          <div
            id="modal-backdrop"
            class="modal-backdrop"
            onClick={toggleModal}
          ></div>
          <div class="modal-content">
            <p class="t4 mg-top-2x mg-bottom-4x">
              Are you sure you want to delete this address?
            </p>
            <div class="modal-btn-container">
              <button class="btn btn-primary">DELETE</button>
              <button class="btn btn-secondary" onClick={toggleModal}>
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
