package com.scrumoftheearth.springbootapi;

import com.scrumoftheearth.springbootapi.model.Worker;
import com.scrumoftheearth.springbootapi.repository.ServiceRepository;
import com.scrumoftheearth.springbootapi.service.ServiceService;
import static org.junit.Assert.*;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ServiceAPITests {

    @Autowired
    private ServiceService serviceService;

    @MockBean
    private WorkerRepository repository;

    @Test
    public void getWorkerTest(){
        when(repository.findAll()).thenReturn(Stream.of(new Worker(null, null, null, "Hello")).collect(Collectors.toList()));
        assertEquals(1, workerService.getAllWorkers().size());
    }

    @Test
    public void createWorkerTest(){
        Worker worker = new Worker(null, null, null, "TEST DUMMY WORKER INSTANCE");
        when(repository.save(worker)).thenReturn(worker);
        assertEquals(worker, workerService.saveWorker(worker));
    }

    @Test
    public void getWorkerByIdTest() throws Throwable {
        Worker worker = new Worker(null, null, null, "TEST DUMMY WORKER INSTANCE");
        worker.setId((long)1);
        when(repository.findById((long)1)).thenReturn(java.util.Optional.of(worker));
        assertEquals(worker, workerService.getById((long)1));
    }
}