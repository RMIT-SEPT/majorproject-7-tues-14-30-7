package com.scrumoftheearth.springbootapi.controller;

import com.scrumoftheearth.springbootapi.model.Business;
import com.scrumoftheearth.springbootapi.model.User;
import com.scrumoftheearth.springbootapi.model.Worker;
import com.scrumoftheearth.springbootapi.service.BusinessService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Business")
@ApiOperation(value = "/api/Business",tags = "Business Object Controller")
public class BusinessController {
    @Autowired
    private BusinessService businessService;

    @PostMapping("")
    @ApiOperation(value = "Add a new Business",response = Iterable.class,
            notes = "used to create and add a new Business to the database")
    public ResponseEntity<?> newBusiness(@Valid @RequestBody Business business, BindingResult result){
        // if there is a json error
        if(result.hasErrors())
                return new ResponseEntity<String>("Bad Business Object W.I.P", HttpStatus.BAD_REQUEST);
       Business toadd = businessService.saveOrUpdate(business);
       return new ResponseEntity<Business>(business, HttpStatus.CREATED);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("")
    @ApiOperation(value = "Getting a List of all Businesses",response = Iterable.class,
            notes = "used get all information about every business in the database")
    public List<Business> getAllBusiness(){
        return businessService.getAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
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
    // for updating a business by ID
    @CrossOrigin(origins = "http://localhost:3000")

    @PutMapping("/update={id}")
    @ApiOperation(value = "Updating a Business with the given id",response = Iterable.class,
            notes = "used to update a business information that has the given id, needs all unchanged variable in request")
    public ResponseEntity<?> updateBusiness(@Valid @RequestBody Business business, BindingResult result, @PathVariable long id){
        Optional<Business> toupdate = businessService.getById(id);

        // if there is no business associated with the given ID
        if(!toupdate.isPresent())
            return new ResponseEntity<String>("Business doesnt exist W.I.P", HttpStatus.BAD_REQUEST);

        // if there is a json error
        if(result.hasErrors())
            return new ResponseEntity<String>("Invaild values for updating W.I.P", HttpStatus.BAD_REQUEST);
        business.setId(id);
        businessService.saveOrUpdate(business);
        return ResponseEntity.noContent().build();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getWorker={id}")
    @ApiOperation(value = "Getting the List of worker",response = Iterable.class,
            notes = "used to have a list of all the worker associated with that business")
    public Worker[] getWorkers(@PathVariable long id){
        return businessService.getWorker(id);
    }
}
