package com.scrumoftheearth.springbootapi.api;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.scrumoftheearth.springbootapi.controller.UserController;
import com.scrumoftheearth.springbootapi.error.NotUniqueException;
import com.scrumoftheearth.springbootapi.model.User;
import com.scrumoftheearth.springbootapi.service.UserService;
import org.json.JSONObject;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.NullAndEmptySource;
import org.skyscreamer.jsonassert.JSONAssert;
import org.skyscreamer.jsonassert.JSONCompareMode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * This Calss handles the Intergration tests for the HTTP Layer.
 * Tests and setup is partly based on the following resource: https://reflectoring.io/spring-boot-web-controller-test/
 * Author: Matthew Walters
 */
@WebMvcTest(controllers = UserController.class)
public class UserAPITests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService mockUserService;

    private ObjectMapper objectMapper;

    private List<User> testUsers;

    @BeforeEach
    void init() {
        objectMapper = new ObjectMapper();
        testUsers = new ArrayList<>();

        // 0: Valid user
        testUsers.add(new User("OriginalUserNameTest", "FirstName1", "LastName1", "HomeAddress1", "0499999999"));

        // 1: Valid User, but UserName is not unique
        testUsers.add(new User("DuplicateUserNameTest", "FirstName2", "LastName2", "HomeAddress2", "0499999999"));

        // 2: Valid Saved User with ID = 3 and CreatedAt Date
        User testUser3 = new User("TestUser3", "FirstName3", "LastName3", "HomeAddress3", "0499999999");
        ReflectionTestUtils.setField(testUser3, "createdAt", LocalDateTime.now());
        ReflectionTestUtils.setField(testUser3, "id", 3L);
        testUsers.add(testUser3);

        /* Mock UserService class */

        // User 0: Unique Username and Valid Save
        when(mockUserService.saveUser(eq(testUsers.get(0)))).thenReturn(testUsers.get(0));
        when(mockUserService.checkUserNameNotUnique(testUsers.get(0).getUserName())).thenReturn(false);
        try {
            when(mockUserService.getById(1L)).thenReturn(testUsers.get(0));
        } catch (Throwable throwable) {
            // DO NOTHING
        }

        // User 1: Non-Unique Username and Throw Exception Save
        when(mockUserService.saveUser(eq(testUsers.get(1)))).thenThrow(new NotUniqueException("UserName must be Unique!", HttpStatus.BAD_REQUEST, "userName"));
        when(mockUserService.checkUserNameNotUnique(testUsers.get(1).getUserName())).thenReturn(true);
        try {
            when(mockUserService.getById(2L)).thenThrow(new ResponseStatusException(HttpStatus.NOT_FOUND, "Resource " + Long.toString(2L) + " Not Found!"));
        } catch (Throwable throwable) {
            // DO NOTHING
        }

        // User 2: User for Get
        when(mockUserService.saveUser(eq(testUsers.get(2)))).thenReturn(testUsers.get(2));
        when(mockUserService.checkUserNameNotUnique(testUsers.get(2).getUserName())).thenReturn(false);
        try {
            when(mockUserService.getById(3L)).thenReturn(testUsers.get(2));
        } catch (Throwable throwable) {
            // DO NOTHING
        }
    }

    /* Tests for URI POST '/user/' */
    @Nested
    public class CreateTests {

        @Test
        void NotLoggedIn_PostValidUser_HTTP201AndUser() throws Exception {

            String testUserAsJson = objectMapper.writeValueAsString(testUsers.get(0));

            MvcResult result = mockMvc.perform(MockMvcRequestBuilders.post("/user")
                    .contentType("application/json")
                    .content(testUserAsJson)).andExpect(status().isCreated()).andReturn();

            /*  TODO: This should work the other-way in that the object is deserialize into a user object
                    and all the fields are checked.
            * */
            String resultJson = result.getResponse().getContentAsString();
            assertEquals(testUserAsJson, resultJson);
        }

        @Test
        void NotLoggedIn_PostValidNonUniqueUser_ThenHTTP400AndJsonError() throws Exception {
            String testUserAsJson = objectMapper.writeValueAsString(testUsers.get(1));

            /* https://mkyong.com/spring-boot/spring-test-how-to-test-a-json-array-in-jsonpath/ */
            MvcResult result = mockMvc.perform(MockMvcRequestBuilders.post("/user")
                    .contentType("application/json")
                    .content(testUserAsJson))
                    .andExpect(status().isBadRequest()).andReturn();

            String expectedJson = "{\"errors\":{\"userName\":\"User Name must be unique!\"}}";
            String resultJson = result.getResponse().getContentAsString();
            assertEquals(expectedJson, resultJson);
        }

        @ParameterizedTest
        @NullAndEmptySource
        void NotLoggedIn_PostInvalidFields_ThenHTTP400AndJsonErrors(String nullOrBlank) throws Exception {
            User testUser = new User(nullOrBlank, nullOrBlank, nullOrBlank, nullOrBlank, nullOrBlank);
            String testUserAsJson = objectMapper.writeValueAsString(testUser);

            MvcResult result = mockMvc.perform(MockMvcRequestBuilders.post("/user")
                    .contentType("application/json")
                    .content(testUserAsJson))
                    .andExpect(status().isBadRequest()).andReturn();

            String expectedJson = "{\"errors\":{\"firstName\":\"First Name cannot be blank!\",\"lastName\":\"Last Name cannot be blank!\",\"phoneNumber\":\"Phone Number cannot be blank!\",\"userName\":\"User Name cannot be blank!\",\"homeAddress\":\"Home Address cannot be blank!\"}}";
            String resultJson = result.getResponse().getContentAsString();
            /* https://www.baeldung.com/jsonassert */
            JSONAssert.assertEquals(expectedJson, resultJson, JSONCompareMode.LENIENT);
        }
    }

    /* Tests for URI GET '/user/{id}/' */
    @Nested
    public class ReadTests {
        @Test
        void NotLoggedIn_UserExistsWithID3_ThenHTTP302AndUser() throws Exception {

            MvcResult result = mockMvc.perform(MockMvcRequestBuilders.get("/user/3")
            ).andExpect(status().isFound()).andReturn();
            String resultJson = result.getResponse().getContentAsString();

            String userString = objectMapper.writeValueAsString(testUsers.get(2));
            JsonNode jsonUser = objectMapper.readTree(userString);
            ObjectNode jsonNode = jsonUser.deepCopy();
            DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"); /* https://mkyong.com/java8/java-8-how-to-format-localdatetime/ */
            jsonNode.put("createdAt", testUsers.get(2).getCreatedAt().format(dateTimeFormatter));
            JSONAssert.assertEquals(jsonNode.toString(), resultJson, JSONCompareMode.LENIENT);
        }
    }

    /* Tests for URI PUT '/user/{id}/' */
    @Nested
    public class UpdateTests {

    }

    // TODO: Implement delete tests once api functionality is complete.
//    /* Tests for URI DELETE '/user/{id}/' */
//    @Nested
//    public class DeleteTests {
//
//    }
}
