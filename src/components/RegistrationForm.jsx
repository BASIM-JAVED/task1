import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rememberMe: false,
    dateOfBirth: '',
  });

  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleAddItem = () => {
    setItems([...items, formData]);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      rememberMe: false,
      dateOfBirth: '',
    });
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div className="container">
      <h2 align='center'>Registration Form</h2>
      <div className="form-group">
        <label >First Name:</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label >Last Name:</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label >Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label >Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <div className="form-group checkbox-group">
        <label >
          <input type="checkbox" id="rememberMe" name="rememberMe" checked={formData.rememberMe} onChange={handleChange} />
          Remember me
        </label>
      </div>
      <div className="form-group">
        <label >Date of Birth:</label>
        <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
      </div>
      <button className="button" onClick={handleAddItem}>Add</button>
      <div className="registered-users">
        <h3 align='center'>Registered Users</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.firstName} {item.lastName} - {item.email} - {item.dateOfBirth}{' '}
              <button className="delete-button" onClick={() => handleDeleteItem(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RegistrationForm;
