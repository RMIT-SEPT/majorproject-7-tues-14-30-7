package com.scrumoftheearth.springbootapi.repository;

import com.scrumoftheearth.springbootapi.model.BusinessHours;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BusinessHourRepository extends JpaRepository<BusinessHours, Long> {
    // used to search businessHour table and get all rows that have the same business_id
    @Query("FROM BusinessHours WHERE business_id = ?1 ORDER BY day ASC")
    List<BusinessHours> findbyBusinessId(Long busId);
}
