package com.scrumoftheearth.springbootapi;

import com.scrumoftheearth.springbootapi.model.*;
import com.scrumoftheearth.springbootapi.repository.BusinessRepository;
import com.scrumoftheearth.springbootapi.repository.WorkerRepository;
import com.scrumoftheearth.springbootapi.service.BusinessService;
import com.scrumoftheearth.springbootapi.service.WorkerService;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.sql.Time;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
public class WorkerAPITests1 {

    @Autowired
    private WorkerService workerService;
    private MockMvc mockMvc;

    @MockBean
    private WorkerRepository workerRepository;

    private User testUser1;
    private User testUser2;
    private User testUser3;
    List<Business> testBusinesses;
    List<java.sql.Time> startTimes;
    List<java.sql.Time> endTimes;
    List<Service> services;


    @BeforeEach
    public void setup(){
        testUser1 = new User("testUser1", "test1", "test1",
                "1 Test Street", "11111111");
        testUser2= new User("testUser2", "test2", "test2",
                "1 Test Street", "22222222");
        testUser3 = new User("testUser3", "test3", "test3",
                "1 Test Street", "333333333");

        List<Business> testBusinesses = new ArrayList<Business>();
        List<java.sql.Time> startTimes = new ArrayList<Time>();
        List<java.sql.Time> endTimes = new ArrayList<Time>();
        List<Service> services = new ArrayList<Service>();
    }

    @Test
    public void Test_GetAll(){

        Worker testCase1 = new Worker(testUser1, null, "Test Case 1", null,null,null);
        Worker testCase2 = new Worker(testUser2, null, "Test Case 2", null,null,null);
        Worker testCase3 = new Worker(testUser3, null, "Test Case 3", null,null,null);
        List<Worker> testRepo = new ArrayList<Worker>();
        testRepo.add(testCase1);
        testRepo.add(testCase2);
        testRepo.add(testCase3);

        when(workerRepository.findAll()).thenReturn(testRepo);
        assertEquals(3,workerService.getAllWorkers().size());
    }

    @Test
    public void createWorkerTest(){

        WorkerWState workerWState = new WorkerWState();

        Worker testCase1 = new Worker(testUser1, services, "Test Case 1", testBusinesses, startTimes, endTimes);
        when(workerRepository.save(testCase1)).thenReturn(testCase1);
        assertEquals(testCase1, workerService.saveWorker(workerWState,(long) 1,"Test Worker", services,
                testBusinesses, startTimes, endTimes));
    }

    @Test
    public void getWorkerByIdTest() throws Throwable {

        Worker testCase1 = new Worker(testUser1, services, "Test Case 1", testBusinesses, startTimes, endTimes);
        testCase1.setId((long)1);
        when(workerRepository.findById((long)1)).thenReturn(java.util.Optional.of(testCase1));
        assertEquals(testCase1, workerService.getById(1));
    }

    @Test
    public void Test_update(){

        Worker testCase1 = new Worker(testUser1, services, "Test Case 1", testBusinesses, startTimes, endTimes);

        when(workerRepository.save(testCase1)).thenReturn(testCase1);
        assertEquals(testCase1,workerService.updateWorker(testCase1));
    }




}
