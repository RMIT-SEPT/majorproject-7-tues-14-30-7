package com.scrumoftheearth.springbootapi.service;

import com.scrumoftheearth.springbootapi.model.Service;
import com.scrumoftheearth.springbootapi.model.Worker;
import com.scrumoftheearth.springbootapi.repository.ServiceRepository;
import com.scrumoftheearth.springbootapi.repository.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@org.springframework.stereotype.Service
public class ServiceService {
    @Autowired
    private ServiceRepository serviceRepository;

    public Service getById(long Id) throws Throwable {
        Optional<Service> result = serviceRepository.findById(Id);
        return result.orElseThrow(() -> {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Resource " + Long.toString(Id) + " Not Found!");
        });
    }

    public Service saveService(Service service) {

        return serviceRepository.save(service);
    }

    public Service updateService(Service oldService, Service newService){
        oldService.setWorker(newService.getWorker());
        oldService.setServiceSState(newService.getServiceSState());
        oldService.setDescription(newService.getDescription());
        return serviceRepository.save(oldService);
    }
}
