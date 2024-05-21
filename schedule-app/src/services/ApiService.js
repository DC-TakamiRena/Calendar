const BASE_URL = 'http://localhost:8080/api';

const ApiService = {
  getAllSchedules: async () => {
    const response = await fetch(`${BASE_URL}/schedules`);
    return response.json();
  },
  getAllRecords: async () => {
    const response = await fetch(`${BASE_URL}/records`);
    return response.json();
  },
  addSchedule: async (scheduleData) => {
    const response = await fetch(`${BASE_URL}/schedules`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(scheduleData),
    });
    return response.json();
  },
  addRecord: async (recordData) => {
    const response = await fetch(`${BASE_URL}/records`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recordData),
    });
    return response.json();
  },
};

export default ApiService;
