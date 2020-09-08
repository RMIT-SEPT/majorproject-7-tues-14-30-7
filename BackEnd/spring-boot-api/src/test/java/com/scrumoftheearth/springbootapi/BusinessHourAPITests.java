package com.scrumoftheearth.springbootapi;

import com.scrumoftheearth.springbootapi.model.BusinessHours;
import com.scrumoftheearth.springbootapi.repository.BusinessHourRepository;
import com.scrumoftheearth.springbootapi.service.BusinessHourService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.sql.Time;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
public class BusinessHourAPITests {

    @Autowired
    private BusinessHourService businessHourService;

    @MockBean
    private BusinessHourRepository businessHourRepository;

    @BeforeEach
    public void setup(){
        Time opening1 = Time.valueOf("09:00:00");
        Time closing1 = Time.valueOf("17:00:00");
        BusinessHours testcase1 = new BusinessHours(1,1,1,opening1,closing1);
        BusinessHours testcase2 = new BusinessHours(2,1,2,opening1,closing1);
        BusinessHours testcase3 = new BusinessHours(3,1,3,opening1,closing1);
        BusinessHours testcase4 = new BusinessHours(4,2,5,opening1,closing1);
        businessHourRepository.save(testcase1);
        businessHourRepository.save(testcase2);
        businessHourRepository.save(testcase3);
        businessHourRepository.save(testcase4);
    }

    @Test
    public void Test_add(){
        Time opening2 = Time.valueOf("10:00:00");
        Time closing2 = Time.valueOf("20:00:00");
        BusinessHours testcase5 = new BusinessHours(5,3,4,opening2,closing2);
        when(businessHourRepository.save(testcase5)).thenReturn(testcase5);
        assertEquals(testcase5,businessHourService.saveOrUpdate(testcase5));
    }

    @Test
    public void Test_update(){
        Time opening2 = Time.valueOf("10:00:00");
        Time closing2 = Time.valueOf("20:00:00");
        BusinessHours testcase5 = new BusinessHours(5,3,4,opening2,closing2);
        long toupdate = 5;
        testcase5.setDay(7);
        when(businessHourRepository.save(testcase5)).thenReturn(testcase5);
        assertEquals(testcase5,businessHourService.saveOrUpdate(testcase5));
    }

    @Test
    public void Test_getByBusId(){

    }

    @Test
    public void Test_GetById(){
        long iftofind = 3;
        Time opening1 = Time.valueOf("09:00:00");
        Time closing1 = Time.valueOf("17:00:00");
        BusinessHours testcase3 = new BusinessHours(3,1,3,opening1,closing1);
        when(businessHourRepository.findById(iftofind)).thenReturn(Optional.of(testcase3));
        assertEquals(Optional.of(testcase3),businessHourService.getById(iftofind));
    }

    @Test
    public void Test_DeleteById(){
        Time opening1 = Time.valueOf("09:00:00");
        Time closing1 = Time.valueOf("17:00:00");
        BusinessHours testcase1 = new BusinessHours(1,1,1,opening1,closing1);
        businessHourService.deleteById(testcase1.getId());
        verify(businessHourRepository,times(1)).deleteById(testcase1.getId());
    }
}
