package com.scrumoftheearth.springbootapi.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
public class BusinessHours {
    // business id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    // foreign key to business table
    private long business_id;

    // int to save day (monday = 1, tuesday = 2 etc)
    @NotBlank(message = "Day integer is required")
    private int day;

    // opening time
    @JsonFormat(pattern = "HH:mm")
    @Temporal(TemporalType.TIME)
    private Date openingTime;

    // closing time
    @JsonFormat(pattern = "HH:mm")
    @Temporal(TemporalType.TIME)
    private Date closingTime;

    // blank constructor for production uses
    protected BusinessHours(){

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getBusiness_id() {
        return business_id;
    }

    public void setBusiness_id(long business_id) {
        this.business_id = business_id;
    }

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }

    public Date getOpeningTime() {
        return openingTime;
    }

    public void setOpeningTime(Date openingTime) {
        this.openingTime = openingTime;
    }

    public Date getClosingTime() {
        return closingTime;
    }

    public void setClosingTime(Date closingTime) {
        this.closingTime = closingTime;
    }
}
