package com.scrumoftheearth.springbootapi.repository;

import com.scrumoftheearth.springbootapi.model.Worker;
import org.springframework.data.repository.CrudRepository;

public interface WorkerRepository extends CrudRepository<Worker, Long> {

    @Override
    Iterable<Worker> findAllById(Iterable<Long> iterable);
}
