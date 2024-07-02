import React, { useState } from "react";
import "./PersonalTake.css";

// A custom component that renders the address form
function AddressForm({ onSubmit }) {
  const [address, setAddress] = useState({});

  // A function that handles the address change event
  function handleChange(e) {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  }

  // A function that handles the form submission event
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(address);
  }

  return (
    <div className="Infoform">
      <form onSubmit={handleSubmit} className="form">
        <div className="row">
          <h1>Add New Address</h1>
        </div>
        <div className="row">
          <div>
            <input
              id="mobile"
              name="mobile"
              className="info"
              placeholder="Mobile"
              type="tel"
              value={address.mobile || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              id="name"
              name="name"
              type="text"
              className="info"
              placeholder="Name"
              value={address.name || ""}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div>
            <input
              id="pincode"
              name="pincode"
              type="text"
              placeholder="Pincode"
              className="info"
              value={address.pincode || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              id="locality"
              name="locality"
              type="text"
              className="info"
              placeholder="Locality"
              value={address.locality || ""}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div>
            <input
              id="address"
              name="address"
              type="text"
              className="info addressinfo"
              placeholder="Address"
              value={address.address || ""}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div>
            <input
              id="city"
              name="city"
              type="text"
              className="info"
              placeholder="City"
              value={address.city || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              id="state"
              name="state"
              type="text"
              className="info"
              placeholder="Select State"
              value={address.state || ""}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div>
            <input
              id="landmark"
              name="landmark"
              type="text"
              className="info"
              placeholder="Landmark"
              value={address.landmark || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              id="alternate"
              name="alternate"
              type="tel"
              className="info"
              placeholder="Alternate Phone Number"
              value={address.alternate || ""}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row1">
          <p>Address Type:</p>
          <div className="radio">
            <p htmlFor="home">Home</p>
            <input
              id="home"
              name="type"
              type="radio"
              value="home"
              checked={address.type === "home"}
              onChange={handleChange}
              required
            />
          </div>
          <div className="radio">
            <p htmlFor="office">Office</p>
            <input
              id="office"
              name="type"
              type="radio"
              value="office"
              checked={address.type === "office"}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button className="next button" type="submit">
          Save & Next
        </button>
      </form>
    </div>
  );
}

// A custom component that renders the address confirmation
function AddressConfirmation({ address, onConfirm, onEdit }) {
  return (
    <div class="address_confirm">
      <h3>Please confirm your address</h3>
      <div class="content-info">
        <p>
          <strong>Mobile:</strong> {address.mobile}
        </p>
        <p>
          <strong>Name:</strong> {address.name}
        </p>
        <p>
          <strong>Pincode:</strong> {address.pincode}
        </p>
        <p>
          <strong>Locality:</strong> {address.locality}
        </p>
        <p>
          <strong>Address:</strong> {address.address}
        </p>
        <p>
          <strong>City:</strong> {address.city}
        </p>
        <p>
          <strong>State:</strong> {address.state}
        </p>
        <p>
          <strong>Landmark:</strong> {address.landmark}
        </p>
        <p>
          <strong>Alternate Phone Number:</strong> {address.alternate}
        </p>
        <p>
          <strong>Address Type:</strong> {address.type}
        </p>
      </div>
      <div class="confirm__editbtn">
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onEdit}>Edit</button>
      </div>
    </div>
  );
}

// A custom component that renders the address submission result
function AddressResult({ success, message }) {
  return (
    <div>
      <h3>{success ? "Success" : "Error"}</h3>
      <p>{message}</p>
    </div>
  );
}

// The main component that renders the address component
export default function Address() {
  const [step, setStep] = useState(1); // The current step of the component
  const [address, setAddress] = useState({}); // The address data
  const [result, setResult] = useState({}); // The address submission result

  // A function that handles the address form submission
  function handleAddressSubmit(address) {
    setAddress(address);
    setStep(2);
  }

  // A function that handles the address confirmation
  function handleAddressConfirm() {
    // Simulate an API call to submit the address
    setTimeout(() => {
      // Generate a random success or error message
      const success = Math.random() > 0.5;
      const message = success
        ? "Your address has been saved."
        : "Something went wrong. Please try again.";
      setResult({ success, message });
      setStep(3);
    }, 1000);
  }

  // A function that handles the address edit
  function handleAddressEdit() {
    setStep(1);
  }

  // Render the component based on the current step
  return (
    <div className="main-conponent">
      {step === 1 && <AddressForm onSubmit={handleAddressSubmit} />}
      {step === 2 && (
        <AddressConfirmation
          address={address}
          onConfirm={handleAddressConfirm}
          onEdit={handleAddressEdit}
        />
      )}
      {step === 3 && <AddressResult {...result} />}
    </div>
  );
}
