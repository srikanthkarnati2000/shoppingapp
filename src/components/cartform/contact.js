import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/address/${firstname}/${email}/${phno}`);
  };

  return (
    <>
      <div className="container-fluid loginform border border-success border-2 rounded">
        <div className="row my-3 mx-3">
          <h4>Please enter you details to continue!</h4>
          <form
            className="row g-3 needs-validation"
            onSubmit={handleSubmit}
            formNoValidate
          >
            <div className="col-md-9 mx-5">
              <label htmlFor="validationCustom01" className="form-label">
                <i className="bi bi-person-circle"></i> Full name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                value={firstname}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="validationCustomUsername" className="form-label">
                <i className="bi bi-envelope-at"></i> Email
              </label>
              <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">
                  @
                </span>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  required
                />
                <div className="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="validationCustomUsername" className="form-label">
                <i className="bi bi-telephone"></i> Phone
              </label>
              <div className="input-group has-validation">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{10}"
                  placeholder="99999xxxxx"
                  onChange={(e) => {
                    setPhno(e.target.value);
                  }}
                  value={phno}
                  required
                />
                <div className="invalid-feedback">
                  please enter correct phone number.
                </div>
              </div>
            </div>
            <div className="col-9 mx-5">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
                <label className="form-check-label" htmlFor="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-success rounded-5" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
