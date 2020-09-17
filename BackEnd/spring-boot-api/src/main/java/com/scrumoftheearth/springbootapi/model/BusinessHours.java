package com.scrumoftheearth.springbootapi.model;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.sql.Time;

// POJO for businessHour
@Entity
@NamedQueries({
        // custom query for getting all business time
        @NamedQuery(name = "BusinessHours.findAllBusTime",
        query = "SELECT h FROM BusinessHours h WHERE h.business_id = ?1 ORDER BY h.day")
})
@ApiModel(description = "BusinessTime Model")
public class BusinessHours {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ApiModelProperty(name = "id",required = true,value = "2")
    // business id
    private long id;

    @NotBlank(message = "BusinessHours must be associated with valid business_id")
    @ApiModelProperty(name = "business_id",required = true,value = "1")
    // foreign key to business table,
    private Long business_id;

    @NotBlank(message = "Day integer is required")
    @ApiModelProperty(name = "day",required = true,value = "5")
    // long to save day (monday = 1, tuesday = 2 etc)
    private int day;

    @ApiModelProperty(name="openingTime",value = "09:00:00")
    // opening time
    private Time openingTime;

    @ApiModelProperty(name = "closingTime",value = "17:00:00")
    // closing time
    private Time closingTime;

    // blank constructor for production uses
    protected BusinessHours(){
    }

    // constructor for junit testing
    public BusinessHours(long id,long business_id,int day,Time openingTime,Time closingTime){
        this.id = id;
        this.business_id = business_id;
        this.day = day;
        this.openingTime = openingTime;
        this.closingTime = closingTime;
    }

    // getter and setter
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

    public Time getOpeningTime() {
        return openingTime;
    }

    public void setOpeningTime(Time openingTime) {
        this.openingTime = openingTime;
    }

    public Time getClosingTime() {
        return closingTime;
    }

    public void setClosingTime(Time closingTime) {
        this.closingTime = closingTime;
    }
}
