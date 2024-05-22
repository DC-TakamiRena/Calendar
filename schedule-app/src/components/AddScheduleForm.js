import React, { useState } from 'react';
import '../style/AddScheduleForm.css'

function AddScheduleForm({ addSchedule }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [repeatInterval, setRepeatInterval] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addSchedule({ title, date });
    setTitle('');
    setDate('');
    setRepeatInterval('');
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  }

  const changeDate = (e) => {
    setDate(e.target.value);
  }

  return (
    <div>
      <h2>予定を追加</h2>
      <form onSubmit={handleSubmit} className='flex'>
        <input type='text' title='scheduleTitle' onChange={changeTitle}/>
        <input type='date' title='date' onChange={changeDate} />
        <select value={repeatInterval} onChange={(e) => setRepeatInterval(e.target.value)}>
          <option value={""}>なし</option>
          <option value={"daily"}>毎日</option>
          <option value={"weekly"}>毎週</option>
          <option value={"monthly"}>毎月</option>
          <option value={"yearly"}>毎年</option>
        </select>
        <button type="submit">追加</button>
      </form>
    </div>
  );
}

export default AddScheduleForm;
