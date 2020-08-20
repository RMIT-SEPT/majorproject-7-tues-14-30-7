package com.scrumoftheearth.springbootapi.service;

import static org.assertj.core.api.Assertions.assertThat;

import com.scrumoftheearth.springbootapi.model.Business;
import com.scrumoftheearth.springbootapi.repository.BusinessRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RunWith(SpringRunner.class)
public class BusinessServiceTest{

    @TestConfiguration
    static class BuisnessServiceTestContextConfig{

        @Bean
        public BusinessService businessService(){
            return new BusinessService();
        }
    }

    @Autowired
    private BusinessService businessService;

    @MockBean
    private BusinessRepository businessRepository;

    @Before
    public void setup(){
        Business testcase1 = new Business(1,"bus1","blurb1","description1","address1","123");
        Business testcase2 = new Business(2,"bus2","blurb2","description2","address2","123");
        Business testcase3 = new Business(3,"bus3","blurb3","description3","address3","123");

        Mockito.when(businessRepository.save(testcase1)).thenReturn(testcase1);
        Mockito.when(businessRepository.save(testcase2)).thenReturn(testcase2);
        Mockito.when(businessRepository.save(testcase3)).thenReturn(testcase3);

    }
    @Test
    public void Test_add(){
        Business testcase1 = new Business(1,"bus1","blurb1","description1","address1","123");
        Business testcase2 = new Business(2,"bus2","blurb2","description2","address2","123");
        Business testcase3 = new Business(3,"bus3","blurb3","description3","address3","123");
        List<Business> exepcted = new ArrayList<Business>();
        exepcted.add(testcase1);
        exepcted.add(testcase2);
        exepcted.add(testcase3);
        
        Business bus4 = new Business(4,"bus4","blurb4","description4","address4","123");
        businessService.saveOrUpdate(bus4);
        exepcted.add(bus4);
        assertThat(businessService.getAll()).isEqualTo(bus4);
    }

    @Test
    public void Test_update(){
        Business testcase1 = new Business(1,"bus1","blurb1","description1","address1","123");
        long toupdate = 1;

        testcase1.setBlurb("service1updated");
        businessService.saveOrUpdate(testcase1);
        assertThat(businessService.getById(toupdate).get()).isNotEqualTo(testcase1);
    }
    @Test
    public void Test_GetAll(){
        Business testcase1 = new Business(1,"bus1","blurb1","description1","address1","123");
        Business testcase2 = new Business(2,"bus2","blurb2","description2","address2","123");
        Business testcase3 = new Business(3,"bus3","blurb3","description3","address3","123");
        List<Business> exepcted = new ArrayList<Business>();
        exepcted.add(testcase1);
        exepcted.add(testcase2);
        exepcted.add(testcase3);

        assertThat(businessService.getAll()).isEqualTo(exepcted);
    }

    @Test
    public void Test_GetById(){
        long idTofind = 2;

        Optional<Business> searching = businessService.getById(idTofind);
        Business found = searching.get();
        assertThat(found.getId()).isEqualTo(idTofind);
    }

    @Test
    public void Test_DeleteById(){
        List<Business> testcase = businessService.getAll();
        long idtodelete = 3;

        businessService.deleteById(idtodelete);
        assertThat(businessService.getAll()).isNotEqualTo(testcase);
    }
}

