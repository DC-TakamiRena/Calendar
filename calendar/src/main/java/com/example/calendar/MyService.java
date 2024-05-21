package com.example.calendar;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MyService {

	private final ScheduleRepository scheduleRepository;
	private final RecordRepository recordRepository;
	
	@Autowired
	public MyService(ScheduleRepository scheduleRepository, 
			RecordRepository recordRepository) {
		this.scheduleRepository = scheduleRepository;
		this.recordRepository = recordRepository;
	}
	
	// Schedule related methods
	public List<Schedule> getAllSchedules() {
		return scheduleRepository.findAll();
	}
	
	public Schedule saveSchedule(Schedule schedule) {
		return scheduleRepository.save(schedule);
	}
	
	public Schedule getScheduleById(Long id) {
        return scheduleRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Schedule not found"));
    }
	
	public void deleteSchedule(Long id) {
		scheduleRepository.deleteById(id);
	}
	
	// Record related methods
	public List<Record> getAllRecords() {
		return recordRepository.findAll();
	}
	
	public Record saveRecord(Record record) {
		return recordRepository.save(record);
	}
	
	public Record getRecordById(Long id) {
		return recordRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Record not found"));
	}
	
	public void deleteRecord(Long id) {
		recordRepository.deleteById(id);
	}
}
