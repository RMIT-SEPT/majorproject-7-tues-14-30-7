package com.scrumoftheearth.springbootapi.controller;

import com.scrumoftheearth.springbootapi.model.Business;
import com.scrumoftheearth.springbootapi.model.Worker;
import com.scrumoftheearth.springbootapi.service.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/Business")
@ApiOperation(value = "/api/Business",tags = "Business Object Controller")
public class BusinessController {

    private BusinessService businessService;

    @Autowired
    BusinessController(BusinessService businessService) {
        this.businessService = businessService;
    }

    @PostMapping("")
    @ApiOperation(value = "Add a new Business",response = Iterable.class,
            notes = "used to create and add a new Business to the database")
    public ResponseEntity<?> newBusiness(@Valid @RequestBody Business business){
       Business toadd = businessService.saveOrUpdate(business);
       return new ResponseEntity<Business>(business, HttpStatus.CREATED);
    }

    @GetMapping("")
    @ApiOperation(value = "Getting a List of all Businesses",response = Iterable.class,
            notes = "used get all information about every business in the database")
    public List<Business> getAllBusiness(){
        return businessService.getAll();
    }

    @GetMapping("/findById={id}")
    @ApiOperation(value = "Getting a Business that matches its id",response = Iterable.class,
            notes = "used to get all the business information that has a matching id")
    public Business getById(@PathVariable long id){
        Optional<Business> business = businessService.getById(id);
        return business.get();
    }

    @DeleteMapping("/deleteById={id}")
    @ApiOperation(value = "Deleting a business with the given id",response = Iterable.class,
            notes = "used to grab the business associated with the id and deleting it off the database")
    public void deleteBusiness(@PathVariable long id){
        businessService.deleteById(id);
    }

    @PutMapping("/update={id}")
    @ApiOperation(value = "Updating a Business with the given id",response = Iterable.class,
            notes = "used to update a business information that has the given id, needs all unchanged variable in request")
    public ResponseEntity<?> updateBusiness(@Valid @RequestBody Business business, @PathVariable long id){
        Optional<Business> toupdate = businessService.getById(id);

        // if there is no business associated with the given ID
        if(!toupdate.isPresent())
            return new ResponseEntity<String>("Business with ID doesnt exist", HttpStatus.BAD_REQUEST);
        business.setId(id);
        businessService.saveOrUpdate(business);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/getWorker={id}")
    @ApiOperation(value = "Getting the List of worker",response = Iterable.class,
            notes = "used to have a list of all the worker associated with that business")
    public Worker[] getWorkers(@PathVariable long id){
        return businessService.getWorker(id);
    }

    // handler for Business exceptions, taken from:
    // Baeldung.com accessed 9/10/2020
    // https://www.baeldung.com/spring-boot-bean-validation
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String,String> handleValidationExceptions(MethodArgumentNotValidException ex){
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName,errorMessage);
        });
        return errors;
    }
}
