import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarAlt, faUniversity, faBook, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Form() {
  const data = { Username: "", date: "", collegename: "", course: "", pursuingyear: "", mobileno: "", email: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (flag) console.log("Registered");
  }, [flag]);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!Object.values(inputData).every((field) => field)) {
      alert("All fields are mandatory");
    } else {
      setFlag(true);
    }
  }

  return (
    <>
      <pre>
        {flag && (
          <h2 className="ui-define">
            Hello {inputData.Username}, You've Registered Successfully!!
          </h2>
        )}
      </pre>
      <form className="container" onSubmit={handleSubmit}>
        <div className="header">
          <h1>Register With Us</h1>
          <h3>Just one step away! Join Codelatent, and I promise to give my best for your journey</h3>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label><b>Name:</b></label>
            <div className="input-container">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input type="text" placeholder="Username" name="Username" value={inputData.Username} onChange={handleData} required/>
            </div>
          </div>

          <div className="form-group">
            <label><b>Today Is:</b></label>
            <div className="input-container">
              <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
              <input type="date" name="date" value={inputData.date} onChange={handleData} required/>
            </div>
          </div>

          <div className="form-group">
            <label><b>College Name:</b></label>
            <div className="input-container">
              <FontAwesomeIcon icon={faUniversity} className="icon" />
              <input type="text" placeholder="Enter College Name" name="collegename" value={inputData.collegename} onChange={handleData} required/>
            </div>
          </div>

          <div className="form-group">
            <label><b>Course:</b></label>
            <div className="input-container">
              <FontAwesomeIcon icon={faBook} className="icon" />
              <input type="text" placeholder="Select Your Course" name="course" value={inputData.course} onChange={handleData} required/>
            </div>
          </div>

          <div className="form-group">
            <label><b>Year:</b></label>
            <select name="pursuingyear" value={inputData.pursuingyear} onChange={handleData} required>
              <option value="">-- Select Pursuing Year --</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>

          <div className="form-group">
            <label><b>Contact No:</b></label>
            <div className="input-container">
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <input type="text" placeholder="Mobile No" name="mobileno" value={inputData.mobileno} onChange={handleData} required/>
            </div>
          </div>

          <div className="form-group">
            <label><b>Email Id:</b></label>
            <div className="input-container">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <input type="email" placeholder="Email Id" name="email" value={inputData.email} onChange={handleData} required/>
            </div>
          </div>
        </div>

        <div>
          <button type="submit">Register Now</button>
        </div>
      </form>
    </>
  );
}

export default Form;
