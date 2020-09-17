package com.scrumoftheearth.springbootapi.model;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

// POJO for business
<<<<<<< HEAD
@Entity
@NamedQueries({
//        @NamedQuery(name = "Business.findAllWorkers",
//                query = "SELECT w FROM User w WHERE w.id = 1 OR  w.id = 2")
        @NamedQuery(name = "Business.findAllWorkers",
                query = "SELECT b.worker FROM Business b WHERE b.id = :id")
})
=======
@ApiModel(description = "Business Model")
>>>>>>> develop
public class Business {
    // business ID
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
<<<<<<< HEAD
=======
    @ApiModelProperty(name="id",required = true,value = "1")
    // business ID
>>>>>>> develop
    private Long id;

    // state of the business
//    private BusinessBState businessBState;

    // list of worker for the business
    @ManyToMany
    private List<Worker> worker;
<<<<<<< HEAD
=======
    @NotBlank(message = "Business name is required")
>>>>>>> develop

    // name of business
    @NotBlank(message = "Business name is required")
    private String name;

    // blurb the business provides
    @NotBlank(message = "Business blurb is required")
    private String blurb;

    // description of the business
    @NotBlank(message = "Business description is required")
    private String description;

    // address of the business
    @NotBlank(message = "Business address is required")
    private String address;

    // contact info of the business
    @NotBlank(message = "Business contact number is required")
    private String phoneNumber;

    // constructor for production uses
    protected Business() {
        worker = new ArrayList<Worker>();
//        businessBState = new BusinessBState();
    }

    // constructor for testing
    public Business(long id,String name,String blurb,String description,String address,String phoneNumber){
        this.id = id;
        this.name = name;
        this.blurb = blurb;
        this.description = description;
        this.address = address;
        this.phoneNumber = phoneNumber;
        worker = new ArrayList<Worker>();
//        businessBState = new BusinessBState();
    }

    // getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long busid) {
        this.id = busid;
    }

    public String getName() {
        return name;
    }

    public void setName(String busname) {
        this.name = busname;
    }

    public String getBlurb() {
        return blurb;
    }

    public void setBlurb(String busservice) {
        this.blurb = busservice;
    }

//    public BusinessBState getBusinessBState() {
//        return businessBState;
//    }
//
//    public void setBusinessBState(BusinessBState businessBState) {
//        this.businessBState = businessBState;
//    }
//
    public List<Worker> getWorkerList() {
        return worker;
    }

    public void setWorkerList(List<Worker> workerList) {
        this.worker = workerList;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
