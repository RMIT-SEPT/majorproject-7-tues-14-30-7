package com.scrumoftheearth.springbootapi.model;

import javax.persistence.*;

@Entity
public class WorkerWState {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne
    private Worker worker;
    @OneToOne
    private WorkerState workerState;

    public WorkerWState() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Worker getWorker() {
        return worker;
    }

    public void setWorker(Worker worker) {
        this.worker = worker;
    }

    public WorkerState getWorkerState() {
        return workerState;
    }

    public void setWorkerState(WorkerState workerState) {
        this.workerState = workerState;
    }

}
