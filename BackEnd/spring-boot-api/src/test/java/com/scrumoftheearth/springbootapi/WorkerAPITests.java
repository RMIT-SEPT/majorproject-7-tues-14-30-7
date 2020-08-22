package com.scrumoftheearth.springbootapi;

import com.scrumoftheearth.springbootapi.repository.WorkerRepository;
import com.scrumoftheearth.springbootapi.service.WorkerService;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class WorkerAPITests {

    @MockBean
    private WorkerService workerService;

    @MockBean
    private WorkerRepository workerRepository;

// TODO: Fix @Before Annotation

//    @Before
//    public void setup(){
//        workerService = new WorkerService(workerRepository);
//        Worker testWorker1 = new Worker(null, null, "Test dummy worker instance 1");
//        Worker testWorker2 = new Worker(null, null, "Test dummy worker instance 2");
//        Worker testWorker3 = new Worker(null, null, "Test dummy worker instance 3");
//
//        workerService.saveWorker(testWorker1);
//        workerService.saveWorker(testWorker2);
//        workerService.saveWorker(testWorker3);
//    }

    @Test
    public void findWorkerTest() throws Throwable {
        assertEquals(1,(long)workerService.getById(1).getId());
    }

}
