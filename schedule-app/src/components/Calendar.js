import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Calendar.css';

function Calendar({ schedules }) {

  // 現在の年月を保持する state
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);

  // 前月の日付を取得する関数
  const prevMonth = () => {
    return new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
  };

  // 次月の日付を取得する関数
  const nextMonth = () => {
    return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
  };

  const renderCalendarCells = () => {
    const rows = [];
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(); // 現在の月の日数
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay(); // 現在の月の最初の曜日
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
          cells.push(<td key={day}></td>); // 最初の週の月の最初の曜日まで空のセルを追加
        } else if (currentDay <= daysInMonth) {
          const isScheduled = schedules.some((schedule) => {
            const scheduleDate = new Date(schedule.date).getDate();
            return scheduleDate === currentDay;
          });
          cells.push(
            <td key={currentDay} className="calendar-cell">
              <Link to={`/schedules/${currentDay}`}>{currentDay}</Link>
              {isScheduled && <div className="dot">&#8226;</div>}
            </td>
          );
          currentDay++;
        } else {
          cells.push(<td key={currentDay}></td>); // 日数を超えた場合は空のセルを追加
        }
      }
      rows.push(<tr key={rowIndex}>{cells}</tr>);
      rowIndex++;
    }

    return rows;
  };

  const goToPreviousMonth = () => {
    const prevDate = prevMonth();
    setCurrentDate(prevDate);
    setCurrentYear(prevDate.getFullYear());
    setCurrentMonth(prevDate.getMonth() + 1);
  };

  const goToNextMonth = () => {
    const nextDate = nextMonth();
    setCurrentDate(nextDate);
    setCurrentYear(nextDate.getFullYear());
    setCurrentMonth(nextDate.getMonth() + 1);
  }

  return (
    <div className="calendar">
      <div className='calendar-header'>
        <button onClick={goToPreviousMonth}>前月</button>
        <h2>{`${currentYear}年${currentMonth}月`}</h2>
        <button onClick={goToNextMonth}>次月</button>
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
