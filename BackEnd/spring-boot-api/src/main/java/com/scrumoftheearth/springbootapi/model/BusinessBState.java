package com.scrumoftheearth.springbootapi.model;

import javax.persistence.*;

// Store the state of one business
@Entity
public class BusinessBState {
    // Business state id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    // Business this state belongs to
    @OneToOne
    private Business business;
    // business state
    @OneToOne
    private BState BState;
    // State message
    private String messsage;

    public BusinessBState() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Business getBusiness() {
        return business;
    }

    public void setBusiness(Business business) {
        this.business = business;
    }

    public com.scrumoftheearth.springbootapi.model.BState getBState() {
        return BState;
    }

    public void setBState(com.scrumoftheearth.springbootapi.model.BState BState) {
        this.BState = BState;
    }

    public String getMesssage() {
        return messsage;
    }

    public void setMesssage(String messsage) {
        this.messsage = messsage;
    }
}
