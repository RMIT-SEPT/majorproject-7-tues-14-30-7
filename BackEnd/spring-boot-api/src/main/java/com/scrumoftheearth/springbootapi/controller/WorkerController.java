package com.scrumoftheearth.springbootapi.controller;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.scrumoftheearth.springbootapi.model.Service;
import com.scrumoftheearth.springbootapi.model.Worker;
import com.scrumoftheearth.springbootapi.model.WorkerWState;
import com.scrumoftheearth.springbootapi.service.WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@RestController
@CrossOrigin
@RequestMapping("/api/worker")
public class WorkerController {

    private WorkerService workerService;

    @Autowired
    public WorkerController(WorkerService workerService) {
        this.workerService = workerService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> READWorker(@PathVariable("id") Long id) throws Throwable {
        Worker worker = workerService.getById(id);
        return new ResponseEntity<Worker>(worker, HttpStatus.FOUND);
    }

    @PostMapping("")
    public ResponseEntity<?> CREATEWorker(@Valid @RequestBody Worker worker, BindingResult bindingResult){

        Optional<ResponseEntity<Map<String, Map<String, String>>>> fieldErrors = getFieldErrors(bindingResult);

        if(fieldErrors.isPresent()){
            return fieldErrors.get();
        }

        worker = workerService.saveWorker(worker.getWorkerWState(), worker.getUser().getId(), worker.getDescription(), worker.getServices(), worker.getBusinesses());
        return new ResponseEntity<Worker>(worker, HttpStatus.CREATED);
    }

    @GetMapping("")
    public List<Worker> getAllWorkers(){
        return workerService.getAllWorkers();
    }

    @PutMapping("/update={id}")
    public ResponseEntity<?> UPDATEWorker(@Valid @RequestBody Worker updatedWorker,
                                          BindingResult bindingResult) throws Throwable {

        Worker worker = workerService.updateWorker(updatedWorker);

        return new ResponseEntity<>(updatedWorker, HttpStatus.OK);

    }

    private Optional<ResponseEntity<Map<String, Map<String, String>>>> getFieldErrors(BindingResult bindingResult) {
        /* Error Handling Based on article by Baeldung.
            Baeldung 2020, Validation in Spring Boot, Baeldung, Viewed on 15/08/2000
            <https://www.baeldung.com/spring-boot-bean-validation>
         */
        Map<String, String> fieldErrors = new HashMap<>();
        if (bindingResult.hasErrors()) {
            bindingResult.getAllErrors().forEach(error -> {
                fieldErrors.put(((FieldError) error).getField(), error.getDefaultMessage());
            });
        }
        if (!fieldErrors.isEmpty()) {
            Map<String, Map<String, String>> jsonResponse = new HashMap<>();
            jsonResponse.put("errors", fieldErrors);
            return Optional.of(new ResponseEntity<>(jsonResponse, HttpStatus.BAD_REQUEST));
        }
        return Optional.empty();
    }


}
