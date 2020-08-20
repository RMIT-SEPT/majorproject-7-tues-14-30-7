package com.scrumoftheearth.springbootapi;

import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest
public class UserAPITests {

    /* Testing method derived from this article:
    Spring n.a, Testing the Web Layer, Spring, viewed on 15/08/2020,
    <https://spring.io/guides/gs/testing-web/>
     */

    @Autowired
    private MockMvc mockMvc;

    @Nested
    public class GetUserTests {

        @Test
        public void User_GetUser_Status200() throws Exception {

            mockMvc.perform(get("/user/1")
                    .accept(MediaType.APPLICATION_JSON))
                    .andExpect(status().isFound());
        }

        @Test
        public void User_GetUser2_Status200() throws Exception {
            mockMvc.perform(get("/user/2")
                    .accept(MediaType.APPLICATION_JSON))
                    .andExpect(status().isFound());
        }

        @Test
        public void User_GetUser3_Status200() throws Exception {
            mockMvc.perform(get("/user/3")
                    .accept(MediaType.APPLICATION_JSON))
                    .andExpect(status().isFound());
        }

        @Test
        public void User_GetUser4_Status200() throws Exception {
            mockMvc.perform(get("/user/4")
                    .accept(MediaType.APPLICATION_JSON))
                    .andExpect(status().isNotFound());
        }
    }

    @Nested
    public class PostUserTests {

    }

    @Nested
    public class PutUserTests {

    }

}
