import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calendar from './components/Calendar';
import ScheduleList from './components/ScheduleList';
import RecordList from './components/RecordList';
import AddScheduleForm from './components/AddScheduleForm';
import AddRecordForm from './components/AddRecordForm';
import ScheduleDetails from './components/ScheduleDetail'; // 新たに追加するコンポーネント
import ApiService from './services/ApiService';
import './App.css';

function App() {
  const [schedules, setSchedules] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchSchedules();
    fetchRecords();
  }, []);

  const fetchSchedules = async () => {
    try {
      const data = await ApiService.getAllSchedules();
      setSchedules(data);
    } catch (error) {
      console.error('Error fetching schedules:', error);
    }
  };

  const fetchRecords = async () => {
    try {
      const data = await ApiService.getAllRecords();
      setRecords(data);
    } catch (error) {
      console.error('Error fetching records:', error);
    }
  };

  const addSchedule = async (scheduleData) => {
    try {
      const newSchedule = await ApiService.addSchedule(scheduleData);
      setSchedules([...schedules, newSchedule]);
    } catch (error) {
      console.error('Error adding schedule:', error);
    }
  };

  const addRecord = async (recordData) => {
    try {
      const newRecord = await ApiService.addRecord(recordData);
      setRecords([...records, newRecord]);
    } catch (error) {
      console.error('Error adding record:', error);
    }
  };

  return (
    <Router>
      <div className="App biz-udgothic-regular">
        <h1>お掃除管理アプリ</h1>
        <Routes>
          <Route path="/" element={
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <Calendar schedules={schedules} />
                  <AddScheduleForm addSchedule={addSchedule} />
                </div>
                {/* <div className="col-md-6">
                  <ScheduleList schedules={schedules} />
                  <RecordList records={records} />
                  <AddRecordForm addRecord={addRecord} />
                </div> */}
              </div>
            </div>
          } />
          <Route path="/schedules/:date" element={<ScheduleDetails schedules={schedules} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
