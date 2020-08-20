package com.scrumoftheearth.springbootapi.repository;

import com.scrumoftheearth.springbootapi.model.Service;
import com.scrumoftheearth.springbootapi.model.Worker;
import org.springframework.data.repository.CrudRepository;

public interface ServiceRepository extends CrudRepository<Service, Long> {
    @Override
    Iterable<Service> findAllById(Iterable<Long> iterable);
}
