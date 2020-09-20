package com.scrumoftheearth.springbootapi;

import com.scrumoftheearth.springbootapi.repository.WorkerRepository;
import com.scrumoftheearth.springbootapi.service.WorkerService;
import com.scrumoftheearth.springbootapi.model.Worker;
import static org.junit.Assert.*;
import static org.mockito.Mockito.when;

import org.junit.Test;

import org.junit.runner.RunWith;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@SpringBootTest
public class WorkerAPITests {

    @Autowired
    private WorkerService workerService;

    @MockBean
    private WorkerRepository workerRepository;


    @Test
    public void getWorkerTest(){
        Worker testCase1 = new Worker(null, null, null, "Test Case 1", null);
        Worker testCase2 = new Worker(null, null, null, "Test Case 2", null);
        Worker testCase3 = new Worker(null, null, null, "Test Case 3", null);
        List<Worker> testRepo = new ArrayList<Worker>();
        testRepo.add(testCase1);
        testRepo.add(testCase2);
        testRepo.add(testCase3);

        //Test code to mock a stream (Using a reference for if needed in the future)
        //when(repository.findAll()).thenReturn(Stream.of(new Worker(null, null, null, "Hello")).collect(Collectors.toList()));

        when(workerRepository.findAll()).thenReturn(testRepo);
        assertEquals(3, workerService.getAllWorkers().size());
    }

    /*
    @Test
    public void createWorkerTest(){
        Worker worker = new Worker();
        when(workerRepository.save(worker)).thenReturn(worker);
        assertEquals(worker, workerService.saveWorker(null, 1, null, "TEST DUMMY WORKER INSTANCE"));
    }
    */


    @Test
    public void getWorkerByIdTest() throws Throwable {
        Worker worker = new Worker(null, null, null, "TEST DUMMY WORKER INSTANCE", null);
        worker.setId((long)1);
        when(workerRepository.findById((long)1)).thenReturn(java.util.Optional.of(worker));
        assertEquals(worker, workerService.getById((long)1));
    }
}
