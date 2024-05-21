package com.example.calendar;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ScheduleController {

    private final MyService myService;

    @Autowired
    public ScheduleController(MyService myService) {
        this.myService = myService;
    }

    // Schedule endpoints
    @GetMapping("/schedules")
    public List<Schedule> getAllSchedules() {
        return myService.getAllSchedules();
    }
    
    @PostMapping("/schedules")
    public Schedule createSchedule(@RequestBody Schedule schedule) {
             return myService.saveSchedule(schedule);
    }
    
    @GetMapping("/schedules/{id}")
    public Schedule getScheduleById(@PathVariable Long id) {
    	return myService.getScheduleById(id);
    }
    
    @DeleteMapping("/schedules/{id}")
    public ResponseEntity<Void> deleteSchedule(@PathVariable Long id) {
    	myService.deleteSchedule(id);
    	return ResponseEntity.noContent().build();
    }
    
    // Record endpoints
    @GetMapping("records")
    public List<Record> getAllRecords() {
        return myService.getAllRecords();
    }
    
    @PostMapping("/records")
    public Record createRecord(@RequestBody Record record) {
        return myService.saveRecord(record);
    }
    
    @GetMapping("/records/{id}")
    public Record getRecordById(@PathVariable Long id) {
        return myService.getRecordById(id);
    }
    
    @DeleteMapping("/records/{id}") 
    public ResponseEntity<Void> deleteRecord(@PathVariable Long id) {
    	myService.deleteRecord(id);
    	return ResponseEntity.noContent().build();
    }
    
}
