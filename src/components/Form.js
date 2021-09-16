import React, { useState } from "react";
import "../App.css";
import { COUNTRIES } from "./countries";

const Form = ({ expand }) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(JSON.stringify({firstname,lastname,address,country,email,phone}))
  }

  return (
    <div
      style={{
        display: expand ? "block" : "none",
      }}
      className="form"
    >
      <h3>Thank you so much for taking the time!</h3>
      <p>Please provide the details</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group ">
          <label htmlFor="exampleFormControlInput1">First Name</label>
          <input
            type="text"
            className="form-control"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Last Name</label>
          <input
            type="text"
            className="form-control"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Address</label>
          <textarea
            className="form-control"
            rows="3"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Country</label>
          <select
            className="form-control"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option></option>
            {COUNTRIES.map((doc) => {
              return (
                <option key={doc.num_code} value={doc.en_short_name}>{doc.en_short_name}</option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Phone Number</label>
          <input
            type="number"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary my-1" onClick={handleSubmit}>
          Submit feedback
        </button>
      </form>
    </div>
  );
};

export default Form;
