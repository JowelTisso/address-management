import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { AddressField } from "./components/address_field/AddressField";
import { Modal } from "./components/modal/Modal";
import SavedAddress from "./components/saved_address/SavedAddress";
import { useAddress } from "./context/address-context";

function App() {
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const [isEditActive, setIsEditActive] = useState(false);
  const [addressId, setAddressId] = useState("");

  // custom address hook
  const {
    addressList,
    setAddressList,
    removeFromAddressList,
    setSelectedAddress,
  } = useAddress();

  const toggleModal = () => {
    setIsModalActive((state) => !state);
  };

  const toggleAddingAddress = () => {
    resetAddressField();
    setIsAddingAddress((state) => !state);
  };

  const toggleEditMode = () => {
    setIsEditActive((state) => !state);
  };

  const getInitialDataFromServer = async () => {
    try {
      const { status, data } = await axios.get("/api/addresses");
      if (status === 200) {
        setAddressList(data.addresses);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getSelectedAddressId = (id) => {
    setAddressId(id);
  };

  const deleteAddressFromServer = async () => {
    try {
      if (addressId) {
        toggleModal();
        const { status } = await axios.delete(`/api/addresses/${addressId}`);
        if (status === 204) {
          removeFromAddressList(addressId);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const resetAddressField = () => {
    setSelectedAddress({
      name: "",
      mobile: "",
      address: "",
      pin: "",
      city: "",
      state: "",
      landmark: "",
    });
  };

  const closeEditField = () => {
    setIsEditActive(false);
  };

  const closeNewAddressField = () => {
    setIsAddingAddress(false);
  };

  useEffect(() => {
    getInitialDataFromServer();
  }, []);

  return (
    <div className="App flex-center">
      <div className="addressContainer">
        <p className="t3">Manage Address</p>
        {!isAddingAddress ? (
          <button
            className="addAddressContainer pointer mg-top-2x"
            onClick={() => {
              closeEditField();
              toggleAddingAddress();
            }}
          >
            <p className="t4">
              <span className="t4">+ </span>
              ADD A NEW ADDRESS
            </p>
          </button>
        ) : (
          <AddressField toggleAddressField={toggleAddingAddress} />
        )}

        {isEditActive ? (
          <AddressField toggleAddressField={toggleEditMode} />
        ) : (
          addressList.map((data) => {
            return (
              <div key={data.id}>
                <SavedAddress
                  data={data}
                  toggleModal={toggleModal}
                  toggleEditMode={toggleEditMode}
                  getSelectedAddressId={getSelectedAddressId}
                  closeNewAddressField={closeNewAddressField}
                />
              </div>
            );
          })
        )}
      </div>
      {isModalActive && (
        <Modal
          toggleModal={toggleModal}
          deleteAddressFromServer={deleteAddressFromServer}
        />
      )}
    </div>
  );
}

export default App;
