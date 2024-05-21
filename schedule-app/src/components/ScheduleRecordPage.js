// ScheduleRecordPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ApiService from '../services/ApiService';

function ScheduleRecordPage() {
  const { year, month, day } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiService.getDataByDate(year, month, day); // このメソッドは実際のAPIの仕様に合わせて実装する必要があります
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [year, month, day]);

  return (
    <div>
      <h2>Schedule and Record for {year}/{month}/{day}</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{/* データの表示方法に応じて要素をレンダリング */}</li>
        ))}
      </ul>
    </div>
  );
}

export default ScheduleRecordPage;
