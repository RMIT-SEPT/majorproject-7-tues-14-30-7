package com.scrumoftheearth.springbootapi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Entity
// POJO for business
public class Business {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // business ID
    private Long id;
    @NotBlank(message = "Business name is required")
    // name of business
    private String name;
    @NotBlank(message = "Business services is required")
    // services the business provides
    private String service;

    protected Business() {
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

    public String getService() {
        return service;
    }

    public void setService(String busservice) {
        this.service = busservice;
    }
}
