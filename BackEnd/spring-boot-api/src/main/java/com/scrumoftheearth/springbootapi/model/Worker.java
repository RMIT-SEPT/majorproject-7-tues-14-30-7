package com.scrumoftheearth.springbootapi.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.sql.Time;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "worker")
public class Worker implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne
    @MapsId
    private User user;
    @ManyToMany
    private List<Business> businesses;
    @OneToOne
    @JoinColumn(name = "workerWState_id")
    private WorkerWState workerWState;
    @OneToMany
    private List<Service> services;
    @NotBlank
    private String description;
    @ElementCollection
    @JsonFormat(pattern = ("HH:mm:ss"))
    private List<java.sql.Time> startTimes;
    @ElementCollection
    @JsonFormat(pattern = ("HH:mm:ss"))
    private List<java.sql.Time> endTimes;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date created_At;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date updated_At;

    public Worker(){
    }

    //Add workerWState later
    public Worker(User user, List<Service> services, @NotBlank String description, List<Business> businesses,
                  List<java.sql.Time> startTimes, List<java.sql.Time> endTimes) {
        //this.workerWState = workerWState;
        this.user = user;
        this.businesses = businesses;
        this.services = services;
        this.description = description;
        this.startTimes = startTimes;
        this.endTimes = endTimes;
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

    public WorkerWState getWorkerWState() {
        return workerWState;
    }

    public void setWorkerWState(WorkerWState workerWState) {
        this.workerWState = workerWState;
    }

    public List<Service> getServices() {
        return services;
    }

    public void setServices(List<Service> services) {
        this.services = services;
    }

    public void addService(Service service){
        this.services.add(service);
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Business> getBusinesses() {
        return businesses;
    }

    public void setBusinesses   (List<Business> business) {
        this.businesses = business;
    }

    public List<java.sql.Time> getEndTimes() {
        return endTimes;
    }

    public void setEndTimes(List<java.sql.Time> endTimes) {
        this.endTimes = endTimes;
    }

    public List<java.sql.Time> getStartTimes() {
        return startTimes;
    }

    public void setStartTimes(List<java.sql.Time> startTimes) {
        this.startTimes = startTimes;
    }

        

}
