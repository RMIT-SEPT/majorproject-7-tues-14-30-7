package com.scrumoftheearth.springbootapi.service;

import com.scrumoftheearth.springbootapi.model.Business;
import com.scrumoftheearth.springbootapi.model.User;
import com.scrumoftheearth.springbootapi.model.Worker;
import com.scrumoftheearth.springbootapi.model.WorkerWState;
import com.scrumoftheearth.springbootapi.repository.UserRepository;
import com.scrumoftheearth.springbootapi.repository.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.constraints.NotBlank;
import java.util.List;
import java.util.Optional;

@Service
public class WorkerService {
    private UserRepository userRepository;
    private final WorkerRepository workerRepository;

    @Autowired
    public WorkerService(WorkerRepository workerRepository, UserRepository userRepository){
        this.userRepository = userRepository;
        this.workerRepository = workerRepository;
    }

    public Worker getById(long Id) throws Throwable {
        Optional<Worker> result = workerRepository.findById(Id);
        return result.orElseThrow(() -> {
           throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Resource " + Long.toString(Id) + " Not Found!");
        });
    }

    public List<Worker> getAllWorkers(){
        List<Worker> workers = workerRepository.findAll();
        return workers;
    }

    public Worker saveWorker(WorkerWState workerWState, Long userId, @NotBlank String description, List<com.scrumoftheearth.springbootapi.model.Service> services
    , List<Business> businesses) {

        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User does not exist: " + userId));

        return workerRepository.save(new Worker(workerWState, user , services, description, businesses));
    }

    public Worker updateWorker(Worker updatedWorker){

        Optional<Worker> oldWorker = workerRepository.findById(updatedWorker.getId());

        //if(!updatedWorker.getBusiness().equals(oldWorker)){
        //    for()
        //}
        return workerRepository.save(updatedWorker);
    }

    public Worker addService(com.scrumoftheearth.springbootapi.model.Service service, Worker worker){
        worker.addService(service);
        return workerRepository.save(worker);
    }
}
