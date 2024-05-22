// ScheduleDetail.js

import React from 'react';

function ScheduleDetail({ match }) {
  // パラメータから日付を取得
  const date = match.params.date;

  // ここで予定の詳細を取得し、表示する

  return (
    <div>
      <h2>Schedule Detail</h2>
      <p>Date: {date}</p>
      {/* 他の予定の詳細情報を表示 */}
    </div>
  );
}

export default ScheduleDetail;
