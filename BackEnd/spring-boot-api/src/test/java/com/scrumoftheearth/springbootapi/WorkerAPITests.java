package com.scrumoftheearth.springbootapi;

import com.scrumoftheearth.springbootapi.model.Worker;
import com.scrumoftheearth.springbootapi.repository.WorkerRepository;
import com.scrumoftheearth.springbootapi.service.WorkerService;
import org.junit.Before;
import static org.junit.Assert.*;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.stubbing.OngoingStubbing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

@RunWith(SpringRunner.class)
@SpringBootTest
public class WorkerAPITests {

    @MockBean
    private WorkerService workerService;

    @MockBean
    private WorkerRepository workerRepository;


    @Before
    public void setup(){
        workerService = new WorkerService(workerRepository);
        Worker testWorker1 = new Worker(null, null, "Test dummy worker instance 1");
        Worker testWorker2 = new Worker(null, null, "Test dummy worker instance 2");
        Worker testWorker3 = new Worker(null, null, "Test dummy worker instance 3");

        workerService.saveWorker(testWorker1);
        workerService.saveWorker(testWorker2);
        workerService.saveWorker(testWorker3);
    }

    @Test
    public void findWorkerTest() throws Throwable {
        assertEquals((long) 1,(long)workerService.getById(1).getId());
    }

}
