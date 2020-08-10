package com.scrumoftheearth.springbootapi.service;

import com.scrumoftheearth.springbootapi.model.User;
import com.scrumoftheearth.springbootapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.swing.text.html.Option;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User GetById(Long Id) throws ResponseStatusException {
        Optional<User> result = userRepository.findById(Id);
        return result.orElseThrow(() -> {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Resource " + Id.toString() + " Not Found!");
        });
    }
}
