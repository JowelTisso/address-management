import React from "react";
import "./AddressField.css";

const AddressField = ({ toggleAddingAddress }) => {
  return (
    <div className="AddressFieldContainer mg-top-2x">
      <p className="t4">Add a new address</p>
      <main className="grid mg-top-2x">
        <div class="input-container mg-bottom-2x">
          <input type="text" class="input-simple" placeholder="Name" />
        </div>

        <div class="input-container mg-bottom-2x">
          <input type="tel" class="input-simple" placeholder="Mobile" />
        </div>

        <div class="input-container mg-bottom-2x input-address">
          <textarea class="input-simple input-area" placeholder="Address" />
        </div>

        <div class="input-container mg-bottom-2x">
          <input type="number" class="input-simple" placeholder="Pin" />
        </div>

        <div class="input-container mg-bottom-2x">
          <input
            type="text"
            class="input-simple"
            placeholder="City/District/Town"
          />
        </div>

        <div class="input-container mg-bottom-2x">
          <input type="text" class="input-simple" placeholder="State" />
        </div>

        <div class="input-container mg-bottom-2x">
          <input type="text" class="input-simple" placeholder="Landmark" />
        </div>
      </main>
      <button className="btn btn-primary">Save</button>
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
