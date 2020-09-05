package com.scrumoftheearth.springbootapi.controller;

import com.scrumoftheearth.springbootapi.model.Business;
import com.scrumoftheearth.springbootapi.service.BusinessService;
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
public class BusinessController {
    @Autowired
    private BusinessService businessService;

    // for adding a new business to the database
    @PostMapping("")
    public ResponseEntity<?> newBusiness(@Valid @RequestBody Business business, BindingResult result){
        // if there is a json error
        if(result.hasErrors())
                return new ResponseEntity<String>("Bad Business Object W.I.P", HttpStatus.BAD_REQUEST);
       Business toadd = businessService.saveOrUpdate(business);
       return new ResponseEntity<Business>(business, HttpStatus.CREATED);
    }

    // for getting a list of all businesses
    @GetMapping("")
    public List<Business> getAllBusiness(){
        return businessService.getAll();
    }

    // for searching for a business by ID
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/findById={id}")
    public Business getById(@PathVariable long id){
        Optional<Business> business = businessService.getById(id);
        return business.get();
    }

    // for deleting a business by ID
    @DeleteMapping("/deleteById={id}")
    public void deleteBusiness(@PathVariable long id){
        businessService.deleteById(id);
    }

    // for updating a business by ID
    @PutMapping("/update={id}")
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
}
