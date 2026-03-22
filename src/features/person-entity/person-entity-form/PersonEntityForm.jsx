import { useState } from "react";
import './PersonEntityForm.css';

const PersonEntityForm = ({ entityType = 'entity', handlePersistFormData }) => {
  const [formData, setFormData] = useState({ name: "", idDocument: "", isCompany: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.target.checkValidity();
    e.preventDefault();
    handlePersistFormData({...formData, isActive: true});
    clearFields();
  };

  const handleClearClick = () => {
    clearFields();
  };

  const clearFields = () => {
    setFormData({ name: "", idDocument: "", isCompany: false });
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: "50%" }}>

      <h1> New {entityType}:</h1>

      <div className="LabelRow"><label for="name">Name:</label>
        <input name="name" required value={formData.name} type="text" onChange={handleChange} /></div>

      <div className="LabelRow">
        <label for="idDocument">Identification Document:</label>
        <input name="idDocument" required value={formData.idDocument} type="number" onChange={handleChange} />
      </div>

      <div className="LabelRow"> <input name="isCompany" checked={formData.isCompany} type="checkbox" onChange={handleCheckboxChange} />
        <label for="isCompany" style={{ marginLeft: "10px" }}>The {entityType} is a company</label>

        <button style={{ marginLeft: "30px" }} className="Clear-field-button" onClick={handleClearClick}>Clear all fields</button>
      </div>

      <input value="Submit" type="submit" style={{ width: "100%", marginTop: "30px" }} />
    </form>
  );
}

export default PersonEntityForm;