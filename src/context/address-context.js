import { createContext, useContext, useState } from "react";

const defaultValue = {
  name: "",
  mobile: "",
  address: "",
  pin: "",
  city: "",
  state: "",
  landmark: "",
};
const AddressContext = createContext(defaultValue);

const AddressProvider = ({ children }) => {
  const [addressList, setAddressList] = useState([]);

  const addToAddressList = (data) => {
    setAddressList((list) => list.concat(data));
  };

  const removeFromAddressList = (id) => {
    setAddressList((list) => list.filter((address) => address.id != id));
  };

  return (
    <AddressContext.Provider
      value={{
        addressList: addressList,
        setAddressList: setAddressList,
        addToAddressList: addToAddressList,
        removeFromAddressList: removeFromAddressList,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);

export { AddressProvider, useAddress };
