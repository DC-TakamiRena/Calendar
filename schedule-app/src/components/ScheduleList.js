// ScheduleListPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

function ScheduleListPage() {
  const { date } = useParams();

  // TODO: dateを使用して対応する日付の予定を取得し、表示する

  return (
    <div>
      <h2>Schedule List for {date}</h2>
      {/* 予定を表示するコンポーネントを追加 */}
    </div>
  );
}

export default ScheduleListPage;
