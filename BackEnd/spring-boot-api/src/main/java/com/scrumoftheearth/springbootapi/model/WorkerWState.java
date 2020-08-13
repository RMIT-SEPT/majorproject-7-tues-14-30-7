package com.scrumoftheearth.springbootapi.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class WorkerWState {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Worker worker;
    private WorkerState workerState;

    public WorkerWState() {


    }

}
