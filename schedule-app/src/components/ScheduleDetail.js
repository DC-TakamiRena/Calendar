import React from 'react';
import { useParams } from 'react-router-dom';

const ScheduleDetails = ({ schedules }) => {
  const { date } = useParams();

  // URLのdateパラメータをDateオブジェクトに変換
  const selectedDate = new Date(date);

  // スケジュールの日付を比較して一致するものをフィルタリング
  const scheduleDetails = schedules.filter(schedule => {
    const scheduleDate = new Date(schedule.date);
    return (
      scheduleDate.getFullYear() === selectedDate.getFullYear() &&
      scheduleDate.getMonth() === selectedDate.getMonth() &&
      scheduleDate.getDate() === selectedDate.getDate()
    );
  });

  return (
    <div>
      <h2>掃除の詳細 {date}</h2>
      {scheduleDetails.length > 0 ? (
        <ul>
          {scheduleDetails.map(schedule => (
            <div key={schedule.id}>
              <h3>{schedule.title}</h3>
            </div>
          ))}
        </ul>
      ) : (
        <p>記録はありません</p>
      )}
    </div>
  );
};

export default ScheduleDetails;
