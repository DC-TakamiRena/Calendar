import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Calendar.css';

function Calendar() {
  const renderCalendarCells = () => {
    const rows = [];
    const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate(); // 現在の月の日数
    const firstDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay(); // 現在の月の最初の曜日

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
          cells.push(
            <td key={currentDay}>
              <Link to={`/schedules/${currentDay}`}>{currentDay}</Link>
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

  return (
    <div className="calendar">
      <table>
        <tbody>
          {renderCalendarCells()}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
