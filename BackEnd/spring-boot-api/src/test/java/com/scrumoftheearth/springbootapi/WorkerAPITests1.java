package com.scrumoftheearth.springbootapi;

import com.scrumoftheearth.springbootapi.model.Business;
import com.scrumoftheearth.springbootapi.model.Service;
import com.scrumoftheearth.springbootapi.model.User;
import com.scrumoftheearth.springbootapi.model.Worker;
import com.scrumoftheearth.springbootapi.repository.BusinessRepository;
import com.scrumoftheearth.springbootapi.repository.WorkerRepository;
import com.scrumoftheearth.springbootapi.service.BusinessService;
import com.scrumoftheearth.springbootapi.service.WorkerService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.sql.Time;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
public class WorkestTest {

    @Autowired
    private WorkerService workerService;

    @MockBean
    private WorkerRepository workerRepository;

    @Test
    public void Test_GetAll(){

        User testUser1 = new User("testUser1", "test1", "test1",
                "1 Test Street", "11111111");
        User testUser2= new User("testUser2", "test2", "test2",
                "1 Test Street", "22222222");
        User testUser3 = new User("testUser3", "test3", "test3",
                "1 Test Street", "333333333");

        List<Business> testBusinesses = new ArrayList<Business>();
        List<java.sql.Time> startTimes = new ArrayList<Time>();
        List<java.sql.Time> endTimes = new ArrayList<Time>();
        List<Service> services = new ArrayList<Service>();

        Worker testCase1 = new Worker(testUser1, null, "Test Case 1", null,null,null);
        Worker testCase2 = new Worker(testUser2, null, "Test Case 2", null,null,null);
        Worker testCase3 = new Worker(testUser3, null, "Test Case 3", null,null,null);
        List<Worker> exepcted = new ArrayList<Worker>();
        exepcted.add(testCase1);
        exepcted.add(testCase2);
        exepcted.add(testCase3);
        
        when(workerRepository.findAll()).thenReturn(exepcted);
        assertEquals(3,workerService.getAllWorkers().size());
    }
}
