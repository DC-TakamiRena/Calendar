import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Calendar.css';

function Calendar({ schedules }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  // 前月の日付を取得する関数
  const prevMonth = () => {
    setCurrentDate(prevDate => {
      const prevMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
      setCurrentYear(prevMonthDate.getFullYear());
      setCurrentMonth(prevMonthDate.getMonth());
      return prevMonthDate;
    });
  };

  // 次月の日付を取得する関数
  const nextMonth = () => {
    setCurrentDate(prevDate => {
      const nextMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1);
      setCurrentYear(nextMonthDate.getFullYear());
      setCurrentMonth(nextMonthDate.getMonth());
      return nextMonthDate;
    });
  };

  const renderCalendarCells = () => {
    const rows = [];
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // 現在の月の日数
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // 現在の月の最初の曜日
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    let currentDay = 1;
    rows.push(
      <tr key="header">
        {weekdays.map((day) => (
          <th key={day}>{day}</th>
        ))}
      </tr>
    );

    let rowIndex = 0;
    while (currentDay <= daysInMonth) {
      const cells = [];
      for (let day = 0; day < 7; day++) {
        if (rowIndex === 0 && day < firstDayOfMonth) {
          cells.push(<td key={`${rowIndex}-${day}`}></td>); // 最初の週の月の最初の曜日まで空のセルを追加
        } else if (currentDay <= daysInMonth) {
          const isScheduled = schedules.some((schedule) => {
            const scheduleDate = new Date(schedule.date);
            return (
              scheduleDate.getDate() === currentDay &&
              scheduleDate.getMonth() === currentMonth &&
              scheduleDate.getFullYear() === currentYear
            );
          });
          cells.push(
            <td key={`${rowIndex}-${day}`} className="calendar-cell">
              <Link to={`/schedules/${currentYear}-${currentMonth + 1}-${currentDay}`}>{currentDay}</Link>
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
      <div className="calendar-header">
        <button onClick={prevMonth}>前月</button>
        <h2>{`${currentYear}年${currentMonth + 1}月`}</h2>
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
