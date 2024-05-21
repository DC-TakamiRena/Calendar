import React from 'react';
import '../style/Calendar.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(), // 現在の日付を取得
    };
  }

  render() {
    const { currentDate } = this.state;
    const daysInMonth = this.getDaysInMonth(currentDate);
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    
    return (
      <div className="calendar">
        <h2>{this.getMonthName(currentDate.getMonth())} {currentDate.getFullYear()}</h2>
        <table>
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            {this.renderCalendarDays(firstDayOfMonth, daysInMonth)}
          </tbody>
        </table>
      </div>
    );
  }

  getMonthName(month) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    return monthNames[month];
  }

  getDaysInMonth(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  }

  renderCalendarDays(firstDayOfMonth, daysInMonth) {
    const days = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {
      const row = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDayOfMonth) || day > daysInMonth) {
          row.push(<td key={j}></td>);
        } else {
          row.push(<td key={j}>{day}</td>);
          day++;
        }
      }
      days.push(<tr key={i}>{row}</tr>);
      if (day > daysInMonth) break;
    }

    return days;
  }
}

export default Calendar;
