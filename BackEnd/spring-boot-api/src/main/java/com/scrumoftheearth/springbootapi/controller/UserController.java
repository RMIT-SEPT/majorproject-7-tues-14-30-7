package com.scrumoftheearth.springbootapi.controller;

import com.scrumoftheearth.springbootapi.model.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("user")
public class UserController {

    @GetMapping("/{id}")
    public User getById(@PathVariable("id") Long id) {
        return new User();
    }
}
