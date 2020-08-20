package com.scrumoftheearth.springbootapi.service;

import com.scrumoftheearth.springbootapi.model.Worker;
import com.scrumoftheearth.springbootapi.repository.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class WorkerService {

    private final WorkerRepository workerRepository;

    @Autowired
    public WorkerService(WorkerRepository workerRepository){
        this.workerRepository = workerRepository;
    }

    public Worker getById(long Id) throws Throwable {
        Optional<Worker> result = workerRepository.findById(Id);
        return result.orElseThrow(() -> {
           throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Resource " + Id + " Not Found!");
        });
    }

    public Worker saveWorker(Worker worker) {
        return workerRepository.save(worker);
    }

    public Worker updateWorker(Worker oldWorker, Worker newWorker){
        oldWorker.setWorkerWState(newWorker.getWorkerWState());
        oldWorker.setServices(newWorker.getServices());
        oldWorker.setDescription(newWorker.getDescription());
        return workerRepository.save(oldWorker);
    }

    public Worker addService(com.scrumoftheearth.springbootapi.model.Service service, Worker worker){
        worker.addService(service);
        return workerRepository.save(worker);
    }
}
