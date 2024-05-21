import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Calendar.css';

function Calendar({ schedules }) {

  // 現在の年月を保持する state
  const [currentDate, setCurrentDate] = useState(new Date());

  // 前月の日付を取得する関数
  const prevMonth = () => {
    const prevDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(prevDate);
  };

  // 次月の日付を取得する関数
  const nextMonth = () => {
    const nextDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(nextDate);
  };

  const renderCalendarCells = () => {
    const rows = [];
    const year = currentDate.getFullYear(); // 現在の年
    const month = currentDate.getMonth(); // 現在の月
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // 現在の月の日数
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 現在の月の最初の曜日
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    let currentDay = 1;
    // ヘッダー行を追加
    rows.push(
      <tr key="header">
        {weekdays.map((day) => (
          <th key={day}>{day}</th>
        ))}
      </tr>
    );

    // 月の日数分のセルを追加
    let rowIndex = 0;
    while (currentDay <= daysInMonth) {
      const cells = [];
      for (let day = 0; day < 7; day++) {
        if (rowIndex === 0 && day < firstDayOfMonth) {
          cells.push(<td key={`${rowIndex}-${day}`}></td>); // 最初の週の月の最初の曜日まで空のセルを追加
        } else if (currentDay <= daysInMonth) {
          const isScheduled = schedules.some((schedule) => {
            const scheduleDate = new Date(schedule.date).getDate();
            return scheduleDate === currentDay;
          });
          cells.push(
            <td key={`${rowIndex}-${day}`} className="calendar-cell">
              <Link to={`/schedules/${year}/${month + 1}/${currentDay}`}>{currentDay}</Link>
              {isScheduled && <div className="dot">&#8226;</div>}
            </td>
          );
          currentDay++;
        } else {
          cells.push(<td key={`${rowIndex}-${day}`}></td>); // 日数を超えた場合は空のセルを追加
        }
      }
      rows.push(<tr key={rowIndex}>{cells}</tr>);
      rowIndex++;
    }

    return rows;
  };

  return (
    <div className="calendar">
      <div className='calendar-header'>
        <button onClick={prevMonth}>前月</button>
        <h2>{`${currentDate.getFullYear()}年${currentDate.getMonth() + 1}月`}</h2>
        <button onClick={nextMonth}>次月</button>
      </div>
      <table>
        <tbody>
          {renderCalendarCells()}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
