import React, { useState } from 'react';
import './Task1.css';

function Task1() {
  const [data, setData] = useState([
    { name: 'BASIM', age: 25 },
    { name: 'HAMZA', age: 30 },
    { name: 'ALI', age: 35 },
    { name: 'FAZEEL', age: 95 },
    { name: 'AISHA', age: 18 },
    { name: 'SUHEERA', age: 65 },
    { name: 'MISBAH', age: 25 },
    { name: 'TUBA', age: 15 },
    { name: 'DANIYAL', age: 85 },
    { name: 'MEHWISH', age: 65 },
    { name: 'SADAF', age: 45 },
    { name: 'OMAR', age: 55 },
    { name: 'TUBA', age: 15 },
    { name: 'DANIYAL', age: 85 },
    { name: 'Alina', age: 65 },
    { name: 'haroon', age: 45 },
    { name: 'junaid', age: 55 },
    { name: 'rabia', age: 65 },
    { name: 'anum', age: 45 },
    { name: 'marium', age: 55 },

    
  ]);

  const [displayedData, setDisplayedData] = useState(data.slice(0, 10));
  const [currentIndex, setCurrentIndex] = useState(10);

  const showMore = () => {
    const nextDisplay = data.slice(currentIndex, currentIndex + 2);
    setDisplayedData(prevData => [...prevData, ...nextDisplay]);
    setCurrentIndex(prevIndex => prevIndex + 2);
  };

  const handleAdd = () => {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    if (name && age) {
      const newData = [...data, { name, age: parseInt(age) }];
      setData(newData);
      setDisplayedData(newData.slice(0, currentIndex + 2));
    }
  };

  const handleDelete = index => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    setDisplayedData(newData.slice(0, currentIndex + 2));
  };

  return (
    <div className="container">
      <div className="displayed-data">
        <h2>Displayed Data</h2>
        <ul>
          {displayedData.map((item, index) => (
            <li key={index}>
              <span>Name: {item.name},</span>
              <span>Age: {item.age}</span>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
        <button onClick={showMore} className="show-more-btn">Show More</button>
      </div>

      <div className="add-data">
        <h2>Add Data</h2>
        <input type="text" id="name" placeholder="Name" />
        <input type="number" id="age" placeholder="Age" />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}

export default Task1;
