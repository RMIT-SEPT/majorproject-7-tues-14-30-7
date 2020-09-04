package com.scrumoftheearth.springbootapi.service;

import com.scrumoftheearth.springbootapi.error.NotUniqueException;
import com.scrumoftheearth.springbootapi.model.User;
import com.scrumoftheearth.springbootapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getById(Long Id) throws Throwable {
        Optional<User> result = userRepository.findById(Id);
        return result.orElseThrow(() -> {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Resource " + Id.toString() + " Not Found!");
        });
    }

    public User saveUser(User user) throws NotUniqueException {
        if (checkUserNameNotUnique(user.getUserName())) {
            throw new NotUniqueException("UserName must be Unique!", HttpStatus.BAD_REQUEST, "userName");
        }
        return userRepository.save(user);
    }

    public User updateUser(User oldUser, User newUser) {
        oldUser.setFirstName(newUser.getFirstName());
        oldUser.setLastName(newUser.getLastName());
        oldUser.setHomeAddress(newUser.getHomeAddress());
        oldUser.setPhoneNumber(newUser.getPhoneNumber());
        oldUser.setUserName(newUser.getUserName());
        return userRepository.save(oldUser);
    }
    public boolean checkUserNameNotUnique(String userName) {
        return userRepository.existsByUserName(userName);
    }

}
