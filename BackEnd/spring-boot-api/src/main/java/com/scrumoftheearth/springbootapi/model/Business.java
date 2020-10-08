package com.scrumoftheearth.springbootapi.model;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

// POJO for business
@Entity
@NamedQueries({
        // custom query for getting all worker W.I.P
        @NamedQuery(name = "Business.findAllWorkers",
                query = "SELECT b.worker FROM Business b WHERE b.id = :id")
})
@ApiModel(description = "Business Model")
public class Business {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ApiModelProperty(name="id",required = true,value = "1")
    // business ID
    private long id;

    @OneToOne
    @JoinColumn(name = "BusinessBState_id")
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    @ApiModelProperty(name="businessBState")
    // state of the business
    private BusinessBState businessBState;

    @OneToMany
    @ApiModelProperty(name="worker")
    // list of worker for the business
    private List<Worker> worker;

    @NotBlank(message = "Business name is required")
    @ApiModelProperty(name="name",required = true,value = "Jim's Computer Service")
    // name of business
    private String name;

    @ApiModelProperty(name="blurb",required = true,value = "We deliver quality IT services to your home or business")
    @NotBlank(message = "Business blurb is required")
    // blurb the business provides
    private String blurb;

    @NotBlank(message = "Business description is required")
    @ApiModelProperty(name="description",required = true,value = "We do new Networking configuration,computer repair and more")
    // description of the business
    private String description;

    @NotBlank(message = "Business address is required")
    @ApiModelProperty(name="address",required = true,value = "56/115 Queensberry St, Carlton VIC 3053")
    // address of the business
    private String address;

    @ApiModelProperty(name="phoneNumber",required = true,value = "9925 4468")
    @NotBlank(message = "Business contact number is required")
    // contact info of the business
    private String phoneNumber;

    @OneToOne
//    @MapsId
//    @NotBlank(message = "Business must be tied with a User account")
    @ApiModelProperty(name="Owner", required = false)
    //The user account which this business is owned by belongs to
    private User Owner;

    // blank constructor for production uses
    protected Business() {
        worker = new ArrayList<Worker>();
        businessBState = new BusinessBState();
    }

    // constructor for junit testing
    public Business(long id,String name,String blurb,String description,String address,String phoneNumber){
        this.id = id;
        this.name = name;
        this.blurb = blurb;
        this.description = description;
        this.address = address;
        this.phoneNumber = phoneNumber;
        worker = new ArrayList<Worker>();
        businessBState = new BusinessBState();
    }

    // getters and setters
    public long getId() {
        return id;
    }

    public void setId(long busid) {
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

    public BusinessBState getBusinessBState() {
        return businessBState;
    }

    public void setBusinessBState(BusinessBState businessBState) {
        this.businessBState = businessBState;
    }

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
