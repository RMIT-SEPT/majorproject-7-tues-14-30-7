package com.scrumoftheearth.springbootapi.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Entity
// POJO for business
public class Business {
    // business ID
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // state of the business
//    private BusinessBState businessBState;

//    // List of workers
//    private List<Worker> workerList;

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

    // List of business hours
    @OneToMany(mappedBy = "BusinessHours",cascade = CascadeType.ALL)
    private List<BusinessHours> openinghours;

    // blank constructor for production uses
    protected Business() {
//        workerList = new ArrayList<>();
//        businessBState = new BusinessBState();
    }

    // constructor for junit testing
    public Business(long id,String name,String blurb,String description,String address,String phoneNumber){
        this.id = id;
//        businessBState = new BusinessBState();
//        workerList = new ArrayList<>();
        this.name = name;
        this.blurb = blurb;
        this.description = description;
        this.address = address;
        this.phoneNumber = phoneNumber;
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
//    public List<String> getWorkerList() {
//        return workerList;
//    }
//
//    public void setWorkerList(List<String> workerList) {
//        this.workerList = workerList;
//    }

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
