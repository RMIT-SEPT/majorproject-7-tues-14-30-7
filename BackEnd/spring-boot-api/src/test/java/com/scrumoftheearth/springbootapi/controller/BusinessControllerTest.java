package com.scrumoftheearth.springbootapi.controller;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.BDDMockito.given;
import static org.hamcrest.CoreMatchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.scrumoftheearth.springbootapi.model.Business;
import com.scrumoftheearth.springbootapi.service.BusinessService;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;

@WebMvcTest(BusinessController.class)
public class BusinessControllerTest{

    @Autowired
    private MockMvc mvc;

    @MockBean
    private BusinessService businessService;

    // TODO: Fix @Before annotation
//    @Before
//    public void setup(){
//        Business testcase1 = new Business(1,"bus1","blurb1","description1","address1","123");
//        Business testcase2 = new Business(2,"bus2","blurb2","description2","address2","123");
//        Business testcase3 = new Business(3,"bus3","blurb3","description3","address3","123");
//
//        businessService.saveOrUpdate(testcase1);
//        businessService.saveOrUpdate(testcase2);
//        businessService.saveOrUpdate(testcase3);
//    }

    @Test
    public void Test_POST() throws Exception{
        Business toadd = new Business(4,"bus4","blurb4","description4","address4","123");

        given(businessService.saveOrUpdate(toadd)).willReturn(toadd);
        mvc.perform(post("/api/Business")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$",hasSize(4)))
                .andExpect(jsonPath("[3].name", is(toadd.getName())));
    }

    @Test
    public void Test_GET() throws Exception{
        Business testcase1 = new Business(1,"bus1","blurb1","description1","address1","123");
        Business testcase2 = new Business(2,"bus2","blurb2","description2","address2","123");
        Business testcase3 = new Business(3,"bus3","blurb3","description3","address3","123");
        List<Business> Test_getAll = Arrays.asList(testcase1,testcase2,testcase3);

        given(businessService.getAll()).willReturn(Test_getAll);
        mvc.perform(get("/api/Business")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(3)))
                .andExpect(jsonPath("[0].name", is(testcase1.getName())))
                .andExpect(jsonPath("[1].name", is(testcase2.getName())))
                .andExpect(jsonPath("[2].name", is(testcase3.getName())));

        long toget = 1;
        List<Business> Test_getByID = Arrays.asList(testcase1);

        given(businessService.getById(toget)).willReturn(java.util.Optional.of(testcase1));
        mvc.perform(get("/api/Business/findById=1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath(".name", is(testcase1.getName())));
    }

    @Test
    public void Test_DELETE() throws Exception{
        long todelete = 2;

        mvc.perform(delete("/api/Business/deleteById=2")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    public void Test_PUT() throws Exception{
        Business testcase3 = new Business(3,"bus3","blurb3","description3","address3","123");
        testcase3.setBlurb("service3updated");

        given(businessService.saveOrUpdate(testcase3)).willReturn(testcase3);
        mvc.perform(put("/api/Business/update=3")
            .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("[2].id", is(testcase3.getId())))
                .andExpect(jsonPath("[2].name", is(testcase3.getName())))
                .andExpect(jsonPath("[2].name", is(testcase3.getBlurb())));
    }
}
