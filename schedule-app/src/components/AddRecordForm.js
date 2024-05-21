import React, { useState } from 'react';

function AddRecordForm({ addRecord }) {
  const [title, setTitle] = useState('');
  // const [cleanedArea, setCleanedArea] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecord({ title, date });
    setTitle('');
    // setCleanedArea('');
    setDate('');
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  }

  // const changeArea = (e) => {
  //   setCleanedArea(e.target.value);
  // }

  const changeDate = (e) => {
    setDate(e.target.value);
  }

  return (
    <div>
      <h2>Add Record</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' title='title' onChange={changeTitle} />
        {/* <input type='text' title='area' onChange={changeArea} /> */}
        <input type='date' title='date' onChange={changeDate} />
        <button type="submit">Add Record</button>
      </form>
    </div>
  );
}

export default AddRecordForm;
