package com.scrumoftheearth.springbootapi.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
public class Worker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Size(min = 3, max = 20, message = "Please enter a first name between 3 and 20 characters")
    @NotBlank(message = "Workers first name is required")
    private String firstName;
    @Size(min = 3, max = 20, message = "Please enter a family name between 3 and 20 characters")
    @NotBlank(message = "Workers family name is required")
    private String familyName;
    //Might have to change this later to a collection later, requires a bit more to add
    @NotBlank(message = "Workers provided service is required")
    private String services;
    @NotBlank(message = "Worker must have a worker id")
    private String workerId;

    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date created_At;
    @JsonFormat(pattern = "yyyy-mm-dd")
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

    public String getServices(){
        return services;
    }

    public void setServices(String services){
        this.services = services;
    }

    public String getWorkerId(){
        return workerId;
    }

    public void setWorkerId(String workerId){
        this.workerId = workerId;
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
