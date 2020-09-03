package com.scrumoftheearth.springbootapi.controller;

import com.scrumoftheearth.springbootapi.model.Worker;
import com.scrumoftheearth.springbootapi.service.WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.naming.Binding;
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

        worker = workerService.saveWorker(worker);
        return new ResponseEntity<Worker>(worker, HttpStatus.CREATED);
    }

    @GetMapping("")
    public List<Worker> getAllWorkers(){
        return workerService.getAllWorkers();
    }

    @PutMapping("/update={id}")
    public ResponseEntity<?> UPDATEWorker(@PathVariable("id") Long id, @Valid @RequestBody Worker updatedWorker,
                                          BindingResult bindingResult) throws Throwable {

        //Optional variable to hold worker found by Id, need an optional version to check if worker exists
        Optional<Worker> worker = Optional.ofNullable(workerService.getById(id));

        //Optional variable to hold worker which will be updated
        Worker workerToChange = workerService.getById(id);

        Optional<ResponseEntity<Map<String, Map<String, String>>>> fieldErrors = getFieldErrors(bindingResult);

        //If no worker was found by the Id provided then return an error that this worker to update does not exist
        if(!worker.isPresent()) {
            return new ResponseEntity<String>("Worker doesnt exist", HttpStatus.BAD_REQUEST);
        }

        if(fieldErrors.isPresent()) {
            return fieldErrors.get();
        }

        //Updates worker with relative information to the updatedWorker variable specifications and values
        workerToChange = workerService.updateWorker(workerToChange, updatedWorker);

        return new ResponseEntity<>(workerToChange, HttpStatus.OK);

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
