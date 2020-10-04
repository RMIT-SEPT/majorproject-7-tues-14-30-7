package com.scrumoftheearth.springbootapi.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.fge.jsonpatch.JsonPatch;
import com.github.fge.jsonpatch.JsonPatchException;
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

    private BusinessService businessService;

    @Autowired
    BusinessController(BusinessService businessService) {
        this.businessService = businessService;
    }

    @PostMapping("")
    @ApiOperation(value = "Add a new Business",response = Iterable.class,
            notes = "used to create and add a new Business to the database")
    public ResponseEntity<?> newBusiness(@Valid @RequestBody Business business, BindingResult result){
        // if there is a json error
        if(result.hasErrors())
                return new ResponseEntity<String>("Bad Business Object W.I.P", HttpStatus.BAD_REQUEST);
       Business toAdd = businessService.saveOrUpdate(business);
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
    // for updating a business by ID

    @PutMapping("/update={id}")
    @ApiOperation(value = "Updating a Business with the given id",response = Iterable.class,
            notes = "used to update a business information that has the given id, needs all unchanged variable in request")
    public ResponseEntity<?> updateBusiness(@Valid @RequestBody Business business, BindingResult result, @PathVariable long id){
        Optional<Business> toUpdate = businessService.getById(id);

        // if there is no business associated with the given ID
        if(!toUpdate.isPresent())
            return new ResponseEntity<String>("Business doesnt exist W.I.P", HttpStatus.BAD_REQUEST);

        // if there is a json error
        if(result.hasErrors())
            return new ResponseEntity<String>("Invaild values for updating W.I.P", HttpStatus.BAD_REQUEST);
        business.setId(id);
        businessService.saveOrUpdate(business);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping(path = "/{id}", consumes = "application/json-patch+json")
    public ResponseEntity<Business> PATCHBusiness(@PathVariable("id") Long id, @RequestBody JsonPatch patch) {
        try {
            Business business = businessService.getById(id).orElse(null);
            Business businessPatched = applyPatchToBusiness(patch, business);
            businessService.saveOrUpdate(businessPatched);
            return ResponseEntity.ok(businessPatched);
        } catch (JsonPatchException | JsonProcessingException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    private Business applyPatchToBusiness(
            JsonPatch patch, Business targetBusiness) throws JsonPatchException, JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode patched = patch.apply(objectMapper.convertValue(targetBusiness, JsonNode.class));
        return objectMapper.treeToValue(patched, Business.class);
    }

    @GetMapping("/getWorker={id}")
    @ApiOperation(value = "Getting the List of worker",response = Iterable.class,
            notes = "used to have a list of all the worker associated with that business")
    public Worker[] getWorkers(@PathVariable long id){
        return businessService.getWorker(id);
    }
}
