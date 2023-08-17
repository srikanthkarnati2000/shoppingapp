import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Address = () => {
  const navigate = useNavigate();
  const { firstname, email, phno } = useParams();

  const [houseno, setHouseno] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(
      `/ordersuccess/${firstname}/${email}/${phno}/${houseno}/${street}/${city}/${state}/${phno}`
    );
  };

  return (
    <>
      <div className="container-fluid addressform border border-success border-2 rounded">
        <div className="row my-3 mx-3">
          <h3>Fill out the address need to deliver</h3>
          <form
            className="row g-3 needs-validation justify-content-center"
            onSubmit={handleSubmit}
            formNoValidate
          >
            <div className="col-md-6">
              <label htmlFor="validationCustom01" className="form-label">
                <i className="bi bi-house"></i> House No.
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                onChange={(e) => {
                  setHouseno(e.target.value);
                }}
                value={houseno}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="validationCustom02" className="form-label">
                <i className="bi bi-house-door"></i> Street
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                onChange={(e) => {
                  setStreet(e.target.value);
                }}
                value={street}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="validationCustom02" className="form-label">
                <i className="bi bi-house"></i> City
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                value={city}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="validationCustom02" className="form-label">
                <i className="bi bi-house"></i> State
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                onChange={(e) => {
                  setState(e.target.value);
                }}
                value={state}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="validationCustom02" className="form-label">
                <i className="bi bi-pin-fill"></i> Pin code
              </label>
              <input
                type="text"
                pattern="\d*"
                className="form-control"
                id="validationCustom02"
                placeholder="xxxxx"
                onChange={(e) => {
                  setPin(e.target.value);
                }}
                value={pin}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-12 my-4">
              <button className="btn btn-success rounded-5" type="submit">
                Confirm !
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Address;
