package com.scrumoftheearth.springbootapi.model;

// Store the state of one business
public class BusinessBState {
    // Business this state belongs to
    private Business business;
    // business state
    private BState BState;
    // State message
    private String messsage;

    public BusinessBState() {
    }
}
