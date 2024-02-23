import { useState } from "react";
import React from "react";
import "./Forms.css";

const Forms = () => {
  const [employmentStatus, setEmploymentStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic
  };

  return (
    <div>
      <div className="container ">
        <div className="full-width-container">
          {/* Back Button  */}
          <button type="button" className="btn-1 ">
            Back
          </button>

          <p className="para ">Enroll New Staff</p>
        </div>

        <div className="black-line"></div>

        {/* heading  */}
        <h2 className="h2 ">BRANCH: SHAHEEN JUNIOR COLLEGE</h2>

        <div className="box ">
          <div className="box-text ">Staff Details</div>

          <form onSubmit={handleSubmit} className="form">
            {/* First section*/}

            <div className="col-span-1">
              {/* label -1  */}
              <label htmlFor="employmentStatus" className="blue-head">
                Employment Status:
              </label>

              <select
                id="employmentStatus"
                name="employmentStatus"
                value={employmentStatus}
                onChange={(e) => setEmploymentStatus(e.target.value)}
                className="gray-text"
              >
                <option value="">-Select-</option>
                <option value="temporary">Temporary</option>
                <option value="permanent">Permanent</option>
              </select>
            </div>

            {/* label -2  */}
            <div className="col-span-1">
              <label htmlFor="employmentStatus" className="blue-head">
                Staff Type :
              </label>

              <div className="radio-top-div">
                <div className="radio-item-div">
                  <div className="col-span-2">
                    <div className="mt-1">
                      <label className="label">
                        <input
                          type="radio"
                          className="form-radio"
                          name="teaching"
                          value="teaching"
                        />
                        <span className="span-text">Teaching</span>
                      </label>

                      <label className="label-2">
                        <input
                          type="radio"
                          className="form-radio"
                          name="non-teaching"
                          value="non-teaching"
                        />
                        <span className="span-text">Non-teaching</span>
                      </label>

                      <label className="label-2">
                        <input
                          type="radio"
                          className="form-radio"
                          name="transport"
                          value="transport"
                        />
                        <span className="span-text">Transport</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* label -3  */}

            <div className="col-span-1">
              <label htmlFor="employmentStatus" className="blue-head">
                Staff Department:
              </label>
              <select
                id="employmentStatus"
                name="employmentStatus"
                value={employmentStatus}
                onChange={(e) => setEmploymentStatus(e.target.value)}
                className="gray-text"
              >
                <option value="">-Select Department-</option>
                <option value="temporary">B-Tech</option>
                <option value="permanent">M-Tech</option>
                <option value="permanent">MBA</option>
              </select>
            </div>

            {/* label - 4*/}

            <div className="col-span-1">
              <label htmlFor="employmentStatus" className="blue-head">
                Employment Category:
              </label>
              <select
                id="employmentStatus"
                name="employmentStatus"
                value={employmentStatus}
                onChange={(e) => setEmploymentStatus(e.target.value)}
                className="gray-text"
              >
                <option value="">-Select Category-</option>
                <option value="obc">OBC</option>
                <option value="open">Open</option>
              </select>
            </div>

            {/* label - 5 */}

            <div className="col-span-1">
              <label htmlFor="employmentStatus" className="blue-head">
                Designation: *
              </label>
              <select
                id="employmentStatus"
                name="employmentStatus"
                value={employmentStatus}
                onChange={(e) => setEmploymentStatus(e.target.value)}
                className="gray-text"
              >
                <option value="">-Select Department-</option>
                <option value="temporary">Artificial Intelligence</option>
                <option value="permanent">Computer Science</option>
                <option value="permanent">Data Science</option>
              </select>
            </div>

            {/* label - 6 */}

            <div className="col-span-1">
              <label htmlFor="employmentStatus" className="blue-head">
                Qualification Type : *
              </label>
              <select
                id="employmentStatus"
                name="employmentStatus"
                value={employmentStatus}
                onChange={(e) => setEmploymentStatus(e.target.value)}
                className="gray-text"
              >
                <option value="">-Select Qualification-</option>
                <option value="temporary">Full-Time</option>
                <option value="permanent">Part-Time</option>
              </select>
            </div>

            {/* label - 7 */}

            <div className="col-span-1">
              <label htmlFor="employmentStatus" className="blue-head">
                Education Qualification : *
              </label>
              <select
                id="employmentStatus"
                name="employmentStatus"
                value={employmentStatus}
                onChange={(e) => setEmploymentStatus(e.target.value)}
                className="gray-text"
              >
                <option value="">-Select Qualification-</option>
                <option value="temporary">UG</option>
                <option value="permanent">PG</option>
                <option value="Deploma">Deploma</option>
              </select>
            </div>

            {/* label - 8 */}

            <div className="col-span-1">
              <label htmlFor="employmentStatus" className="blue-head">
                Access Level : *
              </label>
              <select
                id="employmentStatus"
                name="employmentStatus"
                value={employmentStatus}
                onChange={(e) => setEmploymentStatus(e.target.value)}
                className="gray-text"
              >
                <option value="">-Select Access Level-</option>
                <option value="tAdvance">Advance</option>
                <option value="Intermediate">Intermediate</option>
              </select>
            </div>

            {/* label - 9 */}

            <div className="col-span-1">
              <label htmlFor="employmentStatus" className="blue-head">
                Trained As : *
              </label>
              <select
                id="employmentStatus"
                name="employmentStatus"
                value={employmentStatus}
                onChange={(e) => setEmploymentStatus(e.target.value)}
                className="gray-text"
              >
                <option value="">-Select Level-</option>
                <option value="tInternship">Internship</option>
                <option value="job">Job </option>
              </select>
            </div>

            {/* label - 10 */}

            <div className="col-span-1">
              <label htmlFor="employmentStatus" className="blue-head">
                CTET Qualified :
              </label>
              <div className="radio-top-div">
                <div className="radio-item-div">
                  <div className="col-span-2">
                    <div className="mt-1">
                      <label className="label">
                        <input
                          type="radio"
                          className="form-radio"
                          name="yes"
                          value="yes"
                        />
                        <span className="span-text">Yes</span>
                      </label>
                      <label className="label-2">
                        <input
                          type="radio"
                          className="form-radio"
                          name="no"
                          value="no"
                        />
                        <span className="span-text">No</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>

          {/* Section -2  */}

          <div className="prsn-dtl">Personal Details</div>

          <div className="prsn-dtl-container">
            <form className="prsnl-dtl-form">
              <div className="col-span-2">
                {/* label -1  */}

                <label htmlFor="firstName" className="blue-head">
                  First Name: *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="gray-text"
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="middleName" className="blue-head">
                  Middle Name: *
                </label>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  className="gray-text"
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="lastName" className="blue-head">
                  Last Name: *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="gray-text"
                />
              </div>

              {/* Row 2 */}
              <div className="col-span-2">
                <label htmlFor="mobileNumber" className="blue-head">
                  Mobile Number: *
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  className="gray-text"
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="emergencyContact" className="blue-head">
                  Emergency Contact Number: *
                </label>
                <input
                  type="tel"
                  id="emergencyContact"
                  name="emergencyContact"
                  className="gray-text"
                />
              </div>

              {/* Radio  */}
              <div className="col-span-2">
                <label className="blue-head">Gender: *</label>
                <div className="mt-1">
                  <label className="label">
                    <input
                      type="radio"
                      className="form-radio"
                      name="gender"
                      value="male"
                    />
                    <span className="span-text">Male</span>
                  </label>
                  <label className="label-2">
                    <input
                      type="radio"
                      className="form-radio"
                      name="gender"
                      value="female"
                    />
                    <span className="span-text">Female</span>
                  </label>

                  <label className="label-2">
                    <input
                      type="radio"
                      className="form-radio"
                      name="gender"
                      value="female"
                    />
                    <span className="span-text">other</span>
                  </label>
                </div>
              </div>

              {/* Row 3 */}
              <div className="col-span-1">
                <label htmlFor="dob" className="blue-head">
                  Date of Birth: *
                </label>
                <input
                  type="text"
                  id="dob"
                  name="dob"
                  placeholder="dd-mm-yyyy"
                  pattern="\d{2}-\d{2}-\d{4}"
                  title="Please enter a date in the format dd-mm-yyyy"
                  className="gray-text"
                />
              </div>

              <div className="col-span-1">
                <label htmlFor="email" className="blue-head">
                  Email Id: *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="gray-text"
                />
              </div>

              {/* Row 4 */}
              <div className="col-span-2">
                <label htmlFor="permanentAddress" className="blue-head">
                  Permanent Address: *
                </label>
                <textarea
                  id="permanentAddress"
                  name="permanentAddress"
                  rows="3"
                  className="gray-text"
                ></textarea>
              </div>
              <div className="col-span-2">
                <label htmlFor="correspondingAddress" className="blue-head">
                  Corresponding Address: *
                </label>
                <textarea
                  id="correspondingAddress"
                  name="correspondingAddress"
                  rows="3"
                  className="gray-text"
                ></textarea>
              </div>
              <div className="col-span-1">
                <label htmlFor="employmentStatus" className="blue-head">
                  Religion: *
                </label>
                <select
                  id="employmentStatus"
                  name="employmentStatus"
                  value={employmentStatus}
                  onChange={(e) => setEmploymentStatus(e.target.value)}
                  className="gray-text"
                >
                  <option value="">-Select-</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Cristian">Cristian</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </form>
          </div>

          {/* section -3  */}

          <div className="prsn-dtl">Other Details</div>

          <div className="prsn-dtl-container">
            <form className="othr-dtl-form">
              {/* Row 1 */}
              <div className="col-span-2">
                <label htmlFor="firstName" className="blue-head">
                  Adhaar No. : *
                </label>
                <input
                  type="text"
                  id="adhaar"
                  name="adhaar"
                  className="gray-text"
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="middleName" className="blue-head">
                  PAN No.: *
                </label>
                <input type="text" id="pan" name="pan" className="gray-text" />
              </div>

              {/* Row 3 */}
              <div className="col-span-1">
                <label htmlFor="dob" className="blue-head">
                  Date of Birth :
                </label>
                <input
                  type="text"
                  id="dob"
                  name="dob"
                  placeholder="dd-mm-yyyy"
                  pattern="\d{2}-\d{2}-\d{4}"
                  title="Please enter a date in the format dd-mm-yyyy"
                  className="gray-text"
                />
              </div>

              <div className="col-span-2">
                <label htmlFor="email" className="blue-head">
                  Staff Reference Code : *
                </label>
                <input
                  type="text"
                  id="refrenceCode"
                  name="refrenceCode"
                  className="gray-text"
                />
              </div>

              <div className="col-span-2">
                <label className="blue-head">Salary Pay Type:</label>
                <div className="mt-1">
                  <label className="label">
                    <input
                      type="radio"
                      className="form-radio"
                      name="gender"
                      value="male"
                    />
                    <span className="span-text">Consolidate</span>
                  </label>
                  <label className="label-2">
                    <input
                      type="radio"
                      className="form-radio"
                      name="gender"
                      value="female"
                    />
                    <span className="span-text">PAY</span>
                  </label>
                  <label className="label-2">
                    <input
                      type="radio"
                      className="form-radio"
                      name="gender"
                      value="female"
                    />
                    <span className="span-text">other</span>
                  </label>
                </div>
              </div>

              {/* Row 4 */}
              <div className="col-span-2">
                <label htmlFor="permanentAddress" className="blue-head">
                  Government id/ Resident No : *
                </label>
                <textarea
                  id="id"
                  name="id"
                  rows="3"
                  className="gray-text"
                ></textarea>
              </div>

              <div className="col-span-1">
                <label htmlFor="employmentStatus" className="blue-head">
                  Citizenship:
                </label>
                <select
                  id="employmentStatus"
                  name="employmentStatus"
                  value={employmentStatus}
                  onChange={(e) => setEmploymentStatus(e.target.value)}
                  className="gray-text"
                >
                  <option value="">-Select-</option>
                  <option value="temporary">Indian</option>
                  <option value="permanent">Other</option>
                </select>
              </div>
            </form>
          </div>

          {/* Button  */}

          <div className="btn-div">
            <button type="submit" className="btn-dsgn ">
              Save and Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
