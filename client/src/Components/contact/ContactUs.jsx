import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMyNewCommand } from "../../redux/actions/commandActions";
import { RiArrowGoBackFill } from "react-icons/ri";
import "./Contacttt.css";

const ContactUs = () => {
  const { users } = useSelector((state) => state.userReducer);

  const [customerName, setCustomerName] = useState(users.fullName);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [reference, setReference] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [numberOfPiece, setNumberOfPiece] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const myCmd = {
      customerName,
      phoneNumber,
      address,
      reference,
      color,
      size,
      numberOfPiece,   
    };

    dispatch(addMyNewCommand(myCmd));
  };
  return (
    <div className="glob-div">
      <Link to="/profile">
        <RiArrowGoBackFill className="logo-back" />
      </Link>

      <h1 className="title-send-cmd">Send your command</h1>

      <form className="forma-lkol" onSubmit={handleSubmit}>
        <div className="div-costomer-detail">
          <h3>customer details</h3>

          <label className="label-form">Customer's name</label>
          <input
            className="inputs-name"
            type="text"
            placeholder="customer's name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />

          <br />
          <br />

          <label className="label-form">Phone number </label>
          <input
            className="inputs-phone"
            type="text"
            placeholder="phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <br />
          <br />

          <label className="label-form"> Adress</label>
          <input
            className="inputs-address"
            type="text"
            placeholder="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <br />

        <div className="div-clothes-detail">
          <h3>Features of clothes</h3>
          <label className="label-form">reference</label>
          <input
            className="inputs-reference"
            type="text"
            placeholder="reference"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
          />

          <br />
          <br />

          <label className="label-form">Color</label>
          <input
            className="inputs-color"
            type="text"
            placeholder="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />

          <br />
          <br />

          <label className="label-form">Size</label>

          <input
            className="inputs-size"
            type="text"
            placeholder="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />

          <br />
          <br />

          <label className="label-form">number of piece</label>

          <input
            className="inputs-piece"
            type="text"
            placeholder="number of piece"
            value={numberOfPiece}
            onChange={(e) => setNumberOfPiece(e.target.value)}
          />
        </div>
      </form>

      <div>
        <button className="btn-send-cmd" onClick={handleSubmit}>
          Send Command
        </button>

        {/* wa9t n7eb ki na3ti lelbouton type = submit w n7ebha te5dem ;  wa9tha lazemni na3ti lel form : on submit */}
      </div>
    </div>
  );
};

export default ContactUs;
