import React from 'react';
import './PatientForm.css';

function PatientForm() {
  return (
    <div className="form-container">
      {/* Left side */}
      <div className="left-side">
        <div className="form-group">
          <label htmlFor="patientId">Patient ID:</label>
          <input className="patient-id" type="text" id="patientId" placeholder="Enter patient Id" />
        </div>

        <div className="form-group">
          <label htmlFor="patientName">Patient Name:</label>
          <input className="patient-name" type="text" id="patientName" placeholder="Enter patient name" />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input className="dob-input" type="date" id="dob" />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <div className="gender-options">
            <label htmlFor="male" className="gender-option">
              <input type="radio" name="gender" id="male" value="male" />
              Male
            </label>
            <label htmlFor="female" className="gender-option">
              <input type="radio" name="gender" id="female" value="female" />
              Female
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="physician">Physician:</label>
          <input className="physician" type="text" id="physician" placeholder="Physician name" />
        </div>
      </div>

      {/* Right side */}
      <div className="right-side">
        <div className="form-group">
          <label htmlFor="facility">Facility:</label>
          <select className="facility" id="facility">
            <option value="">Select your Facility</option>
            {/* Add facility options here */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="room">Room:</label>
          <input className="room" type="text" id="room" />
        </div>

        <div className="form-group">
          <label htmlFor="admission">Admission:</label>
          <input className="admission" type="text" id="admission" />
        </div>

        <div className="form-group">
          <label htmlFor="admittingDiagnosis">Admitting Diagnosis:</label>
          <input className="admittingdiagnosis" type="text" id="admittingDiagnosis" />
        </div>
      </div>
    </div>
  );
}

export default PatientForm;
