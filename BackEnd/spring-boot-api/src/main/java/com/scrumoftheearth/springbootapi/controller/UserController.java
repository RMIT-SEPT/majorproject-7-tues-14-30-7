package com.scrumoftheearth.springbootapi.controller;

import com.scrumoftheearth.springbootapi.error.NotUniqueException;
import com.scrumoftheearth.springbootapi.model.User;
import com.scrumoftheearth.springbootapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> READUser(@PathVariable("id") Long id) throws Throwable {
        User user = userService.getById(id);
        return new ResponseEntity<User>(user, HttpStatus.FOUND);
    }

    @PostMapping("")
    public ResponseEntity<?> CREATEUser(@Valid @RequestBody User user, BindingResult bindingResult) {
        boolean nonUniqueUserName = userService.checkUserNameNotUnique(user.getUserName());
        Optional<ResponseEntity<Map<String, Map<String, String>>>> fieldErrors = getFieldErrors(bindingResult, nonUniqueUserName);
        if (fieldErrors.isPresent()) {
            return fieldErrors.get();
        }
        try {
            user = userService.saveUser(user);
        } catch (NotUniqueException ex) {
            throw new RuntimeException("Failed at saving User due to uniqueness! This should not occur!", ex);
        }
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> UPDATEUser(@PathVariable("id") Long id, @Valid @RequestBody User updatedUser, BindingResult bindingResult) throws Throwable {
        User user = userService.getById(id);
        boolean nonUniqueUserName = false;
        if (!user.getUserName().equals(updatedUser.getUserName())) {
            nonUniqueUserName = userService.checkUserNameNotUnique(updatedUser.getUserName());
        }
        Optional<ResponseEntity<Map<String, Map<String, String>>>> fieldErrors = getFieldErrors(bindingResult, nonUniqueUserName);
        if (fieldErrors.isPresent()) {
            return fieldErrors.get();
        }
        try {
            user = userService.updateUser(user, updatedUser);
        } catch (NotUniqueException ex) {
            throw new RuntimeException("Failed at saving User due to uniqueness! This should not occur!", ex);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    private Optional<ResponseEntity<Map<String, Map<String, String>>>> getFieldErrors(BindingResult bindingResult, boolean nonUniqueUserName) {
        /* Error Handling Based on article by Baeldung.
            Baeldung 2020, Validation in Spring Boot, Baeldung, Viewed on 15/08/2000
            <https://www.baeldung.com/spring-boot-bean-validation>
         */
        Map<String, String> fieldErrors = new HashMap<>();
        if (bindingResult.hasErrors() || nonUniqueUserName) {
            bindingResult.getAllErrors().forEach(error -> {
                fieldErrors.put(((FieldError) error).getField(), error.getDefaultMessage());
            });
            if (nonUniqueUserName) {
                fieldErrors.put("userName", "User Name must be unique!");
            }
        }
        if (!fieldErrors.isEmpty()) {
            Map<String, Map<String, String>> jsonResponse = new HashMap<>();
            jsonResponse.put("errors", fieldErrors);
            return Optional.of(new ResponseEntity<>(jsonResponse, HttpStatus.BAD_REQUEST));
        }
        return Optional.empty();
    }
}