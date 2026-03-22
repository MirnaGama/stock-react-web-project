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
    e.preventDefault();
    handlePersistFormData(formData);
    setFormData({ name: "", idDocument: "", isCompany: false });
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="LabelRow"><label for="name">Name:</label>
        <input name="name" value={formData.name} type="text" onChange={handleChange} /></div>

      <div className="LabelRow">
        <label for="idDocument">Identification Document:</label>
        <input name="idDocument" value={formData.idDocument} type="number" onChange={handleChange} />
      </div>

      <div className="LabelRow"><label for="isCompany">The {entityType} is a company:</label>
        <input name="isCompany" checked={formData.isCompany} type="checkbox" onChange={handleCheckboxChange} /></div>

        <input value="Submit" type="submit" />
    </form>
  );
}

export default PersonEntityForm;