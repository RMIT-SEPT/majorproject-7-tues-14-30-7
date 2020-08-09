package com.scrumoftheearth.springbootapi.controller;

import com.scrumoftheearth.springbootapi.model.Worker;
import com.scrumoftheearth.springbootapi.service.WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/worker")
public class WorkerController {

    @Autowired
    private WorkerService workerService;

    @PostMapping
    public ResponseEntity<Worker> createNewWorker(@RequestBody Worker worker){
        Worker worker1 = workerService.saveOrUpdateWorker(worker);
        return new ResponseEntity<Worker>(worker, HttpStatus.CREATED);
    }
}
