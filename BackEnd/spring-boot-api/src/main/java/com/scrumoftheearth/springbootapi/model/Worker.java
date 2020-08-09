package com.scrumoftheearth.springbootapi.model;

import javax.persistence.*;
import java.util.Date;

public class Worker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String familyName;
    private String[] services;
    private String workerId;

    private Date created_At;
    private Date updated_At;

    public Worker(){

    }

    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getFirstName(){
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getFamilyName(){
        return familyName;
    }

    public void setFamilyName(String familyName){
        this.familyName = familyName;
    }

    public String[] getServices(){
        return services;
    }

    public void setServices(String[] services){
        this.services = services;
    }

    public String getWorkerId(){
        return workerId;
    }

    public Date getCreated_At(){
        return created_At;
    }

    public void setCreated_at(Date created_At){
        this.created_At = created_At;
    }

    public Date getUpdated_At(){
        return updated_At;
    }

    public void setUpdated_At(Date updated_At){
        this.updated_At = updated_At;
    }

    @PrePersist
    protected void onCreate(){
        this.created_At = new Date();
    }

    @PreUpdate
    protected void onUpdate(){
        this.updated_At = new Date();
    }
}
