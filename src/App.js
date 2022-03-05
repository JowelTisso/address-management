import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { AddressField } from "./components/AddressField";
import SavedAddress from "./components/SavedAddress";
import { useAddress } from "./context/address-context";

function App() {
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const [isEditActive, setIsEditActive] = useState(false);
  // const [addressList, setAddressList] = useState([]);

  const { addressList, setAddressList, addToAddressList } = useAddress();

  const toggleModal = () => {
    setIsModalActive((state) => !state);
  };

  const toggleAddingAddress = () => {
    setIsAddingAddress((state) => !state);
  };

  const toggleEditMode = () => {
    setIsEditActive((state) => !state);
  };

  const getInitialData = async () => {
    try {
      const { status, data } = await axios.get("/api/addresses");
      if (status === 200) {
        setAddressList(data.addresses);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <div className="App flex-center">
      <div className="addressContainer">
        <p className="t3">Manage Address</p>
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
          addressList.map((data) => {
            return (
              <div key={data.id}>
                <SavedAddress
                  data={data}
                  toggleModal={toggleModal}
                  toggleEditMode={toggleEditMode}
                />
              </div>
            );
          })
        )}
      </div>
      {isModalActive && (
        <div id="modal" className="modal">
          <div
            id="modal-backdrop"
            className="modal-backdrop"
            onClick={toggleModal}
          ></div>
          <div className="modal-content">
            <p className="t4 mg-top-2x mg-bottom-4x">
              Are you sure you want to delete this address?
            </p>
            <div className="modal-btn-container">
              <button className="btn btn-primary">DELETE</button>
              <button className="btn btn-secondary" onClick={toggleModal}>
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
