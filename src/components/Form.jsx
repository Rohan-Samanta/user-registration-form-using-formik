import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  ALL_GENDER,
  GOVT_ID,
  ALL_RELIGION,
  ALL_BLOOD_GROUP,
  ALL_STATE,
  MARITAL_STATUS,
} from "./data";

const INITIAL_STATE = {
  name: "",
  dateOfBirth: "",
  gender: "",
  mobileNo: "",
  govId: "",
  govIdNo: "",
  guardian: "",
  guardianDetail: "",
  email: "",
  emergencyNo: "",
  address: "",
  state: "",
  city: "",
  country: "",
  pinCode: "",
  occupation: "",
  religion: "",
  maritalStatus: "",
  bloodGroup: "",
  nationality: "",
};

function Registration() {
  const [user, setUser] = useState([]);

  const handleSubmit = (e) => {
    setUser([...user, e]);
  };

  return (
    <div>
      <Formik initialValues={INITIAL_STATE} onSubmit={(e) => handleSubmit(e)}>
        <Form>
          <h4>Personal Details</h4>
          <div className="row">
            <div className="col input-group">
              <label htmlFor="name" className="input-group-text">
                Name<span style={{ color: "#ff0000" }}>*</span>
              </label>
              <Field
                name="name"
                type="text"
                id="name"
                placeholder="Enter your name"
                className="form-control"
                required
              />
            </div>
            <div className="col input-group">
              <label htmlFor="dob" className="input-group-text">
                Date of Birth<span style={{ color: "#ff0000" }}>*</span>
              </label>
              <Field
                name="dateOfBirth"
                className="form-control"
                type="date"
                id="dob"
                required
                style={{ color: "#999" }}
              />
            </div>
            <div className="col input-group">
              <label htmlFor="gender" className="input-group-text">
                Gender<span style={{ color: "#ff0000" }}>*</span>
              </label>

              <Field
                name="gender"
                as="select"
                className="form-select"
                id="gender"
                required
                style={{ color: "#999" }}
              >
                <option value="" disabled>
                  Select your gender
                </option>
                {ALL_GENDER.map((elm, idx) => {
                  return (
                    <option key={idx} value={elm}>
                      {elm}
                    </option>
                  );
                })}
              </Field>
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col input-group">
              <label htmlFor="mobile" className="input-group-text">
                Mobile No<span style={{ color: "#ff0000" }}>*</span>
              </label>
              <Field
                name="mobileNo"
                type="number"
                className="form-control"
                id="mobile"
                placeholder="Enter your mobile no"
                required
              />
            </div>
            <div className="col input-group">
              <label htmlFor="govId" className="input-group-text">
                Govt Issued ID<span style={{ color: "#ff0000" }}>*</span>
              </label>
              <Field
                name="govId"
                as="select"
                className="form-select"
                id="govId"
                style={{ color: "#999" }}
                required
              >
                <option value="" disabled>
                  Select your govt id
                </option>
                {GOVT_ID.map((elm, idx) => {
                  return (
                    <option key={idx} value={elm}>
                      {elm}
                    </option>
                  );
                })}
              </Field>
              <Field
                name="govIdNo"
                type="text"
                className="form-control"
                placeholder="Enter your Govt ID No"
                required
              />
            </div>
          </div>
          <br />
          <br />

          <h4>Contact Details</h4>
          <div className="row g-3">
            <div className="col input-group">
              <label htmlFor="guardian" className="input-group-text">
                Guardian Detail
              </label>
              <Field
                name="guardian"
                as="select"
                className="form-select"
                id="guardian"
                style={{ color: "#999" }}
              >
                <option value="" disabled>
                  Select your guardian
                </option>
                <option value="father">Father</option>
                <option value="mother">Mother</option>
                <option value="guardian">Guardian</option>
              </Field>
              <Field
                name="guardianDetail"
                type="text"
                className="form-control "
                placeholder="Enter Guardian Name"
              />
            </div>
            <div className="col input-group">
              <label htmlFor="email" className="input-group-text">
                Email<span style={{ color: "#ff0000" }}>*</span>
              </label>
              <Field
                name="email"
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email address"
                required
              />
            </div>
            <div className="col input-group">
              <label htmlFor="emergencyNo" className="input-group-text">
                Emergency No
              </label>
              <Field
                name="emergencyNo"
                type="number"
                className="form-control"
                id="emergencyNo"
                placeholder="Enter emergency no"
              />
            </div>
          </div>
          <br />
          <br />
          <h4>Address Details</h4>
          <div className="row">
            <div className="col input-group">
              <label htmlFor="address" className="input-group-text">
                Address
              </label>
              <Field
                name="address"
                type="text"
                id="address"
                className="form-control "
                placeholder="Enter your address"
              />
            </div>
            <div className="col input-group">
              <label htmlFor="state" className="input-group-text">
                State<span style={{ color: "#ff0000" }}>*</span>
              </label>
              <Field
                name="state"
                as="select"
                id="state"
                className="form-select "
                placeholder="Enter your state"
                required
                style={{ color: "#999" }}
              >
                <option value="" disabled>
                  Select your state
                </option>
                {ALL_STATE.map((elm, idx) => {
                  return (
                    <option key={idx} value={elm}>
                      {elm}
                    </option>
                  );
                })}
              </Field>
            </div>
            <div className="col input-group">
              <label htmlFor="city" className="input-group-text">
                City
              </label>
              <Field
                name="city"
                type="text"
                id="city"
                className="form-control "
                placeholder="Enter your city"
              />
            </div>
          </div>

          <br />
          <div className="row">
            <div className="col input-group">
              <label htmlFor="country" className="input-group-text">
                Country
              </label>
              <Field
                name="country"
                type="text"
                id="country"
                placeholder="Enter Your Country Name"
                className="form-control "
              />
            </div>
            <div className="col input-group">
              <label htmlFor="pinCode" className="input-group-text">
                Pincode
              </label>
              <Field
                name="pinCode"
                type="number"
                id="pinCode"
                placeholder="Enter your pincode"
                className="form-control "
              />
            </div>
          </div>
          <br />
          <br />
          <h4>Other Details</h4>
          <div className="row">
            <div className="col input-group">
              <label htmlFor="occupation" className="input-group-text">
                Occupation
              </label>
              <Field
                name="occupation"
                type="text"
                id="occupation"
                className="form-control "
                placeholder="Enter your occupation"
              />
            </div>
            <div className="col input-group">
              <label htmlFor="religion" className="input-group-text">
                Religion
              </label>
              <Field
                name="religion"
                as="select"
                id="religion"
                className="form-select "
                placeholder="Enter your religion"
                style={{ color: "#999" }}
              >
                <option value="" disabled>
                  Select your religion
                </option>
                {ALL_RELIGION.map((elm, idx) => {
                  return (
                    <option key={idx} value={elm}>
                      {elm}
                    </option>
                  );
                })}
              </Field>
            </div>
            <div className="col input-group">
              <label htmlFor="maritalStatus" className="input-group-text">
                Marital Status
              </label>
              <Field
                name="maritalStatus"
                as="select"
                id="maritalStatus"
                className="form-select "
                placeholder="Enter your country"
                style={{ color: "#999" }}
              >
                <option value="" disabled>
                  Select your status
                </option>
                {MARITAL_STATUS.map((elm, idx) => {
                  return (
                    <option key={idx} value={elm}>
                      {elm}
                    </option>
                  );
                })}
              </Field>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col input-group">
              <label htmlFor="bloodGroup" className="input-group-text">
                Blood Group
              </label>
              <Field
                name="bloodGroup"
                as="select"
                id="bloodGroup"
                className="form-select "
                placeholder="Enter your Blood Group"
                style={{ color: "#999" }}
              >
                <option value="" disabled>
                  Select your blood group
                </option>
                {ALL_BLOOD_GROUP.map((elm, idx) => {
                  return (
                    <option key={idx} value={elm}>
                      {elm}
                    </option>
                  );
                })}
              </Field>
            </div>
            <div className="col input-group">
              <label htmlFor="nationality" className="input-group-text">
                Nationality
              </label>
              <Field
                name="nationality"
                type="text"
                id="nationality"
                className="form-control "
                placeholder="Enter your nationality"
              />
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-center">
            <button type="reset" className="btn btn-danger m-3 px-4 py-2">
              Clear
            </button>
            <button type="submit" className="btn btn-success m-3 px-4 py-2">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
      <hr />
      <h1>All user lists here</h1>
      <hr />
      <br />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">User Id</th>
            <th scope="col">User Name</th>
            <th scope="col">Gender</th>
            <th scope="col">State</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile No</th>
          </tr>
        </thead>
        {user.map((elm, idx) => {
          const { name, email, mobileNo, gender, state } = elm;
          return (
            <tbody key={idx}>
              <tr>
                <th scope="row">{idx + 1}</th>
                <td>{name}</td>
                <td>{gender}</td>
                <td>{state}</td>
                <td>{email}</td>
                <td>{mobileNo}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Registration;
