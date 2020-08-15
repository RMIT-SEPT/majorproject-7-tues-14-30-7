package com.scrumoftheearth.springbootapi.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;
import java.util.List;

@Entity
public class Worker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne
    private WorkerWState workerWState;
    @OneToMany
    private List<Service> services;
    @NotBlank
    private String description;

    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date created_At;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date updated_At;

    public Worker(){
    }

    public Worker(Long id, WorkerWState workerWState,
                  List<Service> services, @NotBlank String description,
                  Date created_At, Date updated_At) {
        this.id = id;
        this.workerWState = workerWState;
        this.services = services;
        this.description = description;
        this.created_At = created_At;
        this.updated_At = updated_At;
    }

    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getDescription(){
        return description;
    }

    public void setDescription(String description){
        this.description = description;
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
