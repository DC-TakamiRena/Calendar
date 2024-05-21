package com.example.calendar;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ScheduleRepository extends JpaRepository<Schedule, Long>{
	void deleteByTitle(String title);
}
