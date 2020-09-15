package com.scrumoftheearth.springbootapi.controller;

import com.scrumoftheearth.springbootapi.model.BusinessHours;
import com.scrumoftheearth.springbootapi.service.BusinessHourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/BusinessHours")
public class BusinessHourController {
    @Autowired
    private BusinessHourService businessTimeService;

    // for adding a new business time
    @PostMapping("")
    public ResponseEntity<?> newBusinessHour(@Valid @RequestBody BusinessHours businessHours, BindingResult result){
        // if there is a json error
        if(result.hasErrors())
            return new ResponseEntity<String>("Bad Business Hour Object W.I.P", HttpStatus.BAD_REQUEST);
        BusinessHours toadd = businessTimeService.saveOrUpdate(businessHours);
        return new ResponseEntity<BusinessHours>(businessHours, HttpStatus.CREATED);
    }

    // for getting the business time for a particular business
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/findByBusId={busId}")

    public List<BusinessHours> getByBusinessId(@PathVariable long busId){
        return businessTimeService.getTimeByBusId(busId);
    }

    // for searching for a business by ID
    @GetMapping("/findById={id}")
    public BusinessHours getById(@PathVariable long id){
        Optional<BusinessHours> businessHour = businessTimeService.getById(id);
        return businessHour.get();
    }

    // for deleting a BusinessTime by id
    @DeleteMapping("/deleteById={id}")
    public void deleteHour(@PathVariable long id){
        businessTimeService.deleteById(id);
    }

    // for updating a business Time by ID
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/update={id}")
    public ResponseEntity<?> updateBusinessHour(@Valid @RequestBody BusinessHours businessHours,BindingResult result, @PathVariable long id){
        Optional<BusinessHours> toupdate = businessTimeService.getById(id);

        //if there is no business associated with the given ID
        if(!toupdate.isPresent())
            return  new ResponseEntity<String>("Business hour object doesnt exist W.I.P",HttpStatus.BAD_REQUEST);

        // if there is a json error
        if(result.hasErrors())
            return new ResponseEntity<String>("Invalid values for updating W.I.P",HttpStatus.BAD_REQUEST);
        businessHours.setId(id);
        businessTimeService.saveOrUpdate(businessHours);
        return ResponseEntity.noContent().build();
    }
}
