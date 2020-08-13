package com.scrumoftheearth.springbootapi.model;

import javax.persistence.*;

@Entity
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne
    private Worker worker;
    private String description;

    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public Worker getWorker(){
        return worker;
    }

    public void setWorker(Worker worker){
        this.worker = worker;
    }

    public String getDescription(){
        return description;
    }

    public void setDescription(String description){
        this.description = description;
    }
}
