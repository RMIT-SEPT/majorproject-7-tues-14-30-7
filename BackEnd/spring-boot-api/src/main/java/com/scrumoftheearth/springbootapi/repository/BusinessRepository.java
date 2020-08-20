package com.scrumoftheearth.springbootapi.repository;

import com.scrumoftheearth.springbootapi.model.Business;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusinessRepository extends JpaRepository<Business, Long> {
}
