package com.scrumoftheearth.springbootapi.model;

import javax.persistence.*;

@Entity
@Table(name = "worker_state")
public class WorkerState {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(mappedBy = "workerState")
    private WorkerWState workerWState;

    public WorkerState() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
