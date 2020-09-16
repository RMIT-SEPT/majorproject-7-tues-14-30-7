package com.scrumoftheearth.springbootapi.service;

import com.scrumoftheearth.springbootapi.model.Business;
import com.scrumoftheearth.springbootapi.model.User;
import com.scrumoftheearth.springbootapi.model.Worker;
import com.scrumoftheearth.springbootapi.model.WorkerWState;
import com.scrumoftheearth.springbootapi.repository.BusinessRepository;
import com.scrumoftheearth.springbootapi.repository.UserRepository;
import com.scrumoftheearth.springbootapi.repository.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.constraints.NotBlank;
import java.sql.Time;
import java.util.List;
import java.util.Optional;


@Service
public class WorkerService {
    private UserRepository userRepository;
    private BusinessRepository businessRepository;
    private final WorkerRepository workerRepository;

    @Autowired
    public WorkerService(WorkerRepository workerRepository, UserRepository userRepository, BusinessRepository businessRepository){
        this.userRepository = userRepository;
        this.workerRepository = workerRepository;
        this.businessRepository = businessRepository;
    }

    public Worker getById(long Id) throws Throwable {
        Optional<Worker> result = workerRepository.findById(Id);
        return result.orElseThrow(() -> {
           throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Resource " + Id + " Not Found!");
        });
    }

    public List<Worker> getAllWorkers(){
        List<Worker> workers = workerRepository.findAll();
        return workers;
    }

    public Worker saveWorker(WorkerWState workerWState, Long userId, @NotBlank String description,
                             List<com.scrumoftheearth.springbootapi.model.Service> services, List<Business> businesses,
                             List<java.sql.Time> startTimes, List<java.sql.Time> endTimes) {

        //Get user based on ID passed through the json request
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User does not exist: " + userId));

        for(int i=0;i<7;i++){
            startTimes.add(java.sql.Time.valueOf("00:00:00"));
        }
        for(int i=0;i<7;i++){
            endTimes.add(java.sql.Time.valueOf("00:00:00"));
        }

        //For each business ID in the json request get the business from the repo then add it to the collection
        for(Business b : businesses){
            //Keep track of this businesses Id
            long businessId = b.getId();
            //Then use this id to get the business object stored in the database
            Business business = businessRepository.findById(businessId).orElseThrow(() -> new RuntimeException(
                    "Business  with id " + businessId + " does not exist"));
            b.setName(business.getName());
            b.setBlurb(business.getBlurb());
            b.setDescription(business.getDescription());
            b.setAddress(business.getAddress());
            b.setPhoneNumber(business.getPhoneNumber());
        }

        return workerRepository.save(new Worker(user, services, description, businesses, startTimes, endTimes));
    }

    public Worker updateWorker(Worker updatedWorker){

        return workerRepository.save(updatedWorker);
    }

    public Worker addService(com.scrumoftheearth.springbootapi.model.Service service, Worker worker){
        worker.addService(service);
        return workerRepository.save(worker);
    }
}
