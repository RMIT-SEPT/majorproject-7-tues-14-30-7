package com.scrumoftheearth.springbootapi.service;

import com.scrumoftheearth.springbootapi.error.NotUniqueException;
import com.scrumoftheearth.springbootapi.model.User;
import com.scrumoftheearth.springbootapi.repository.UserRepository;
import com.scrumoftheearth.springbootapi.repository.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private WorkerRepository workerRepository;

    @Autowired
    public UserService(UserRepository userRepository, WorkerRepository workerRepository) {
        this.workerRepository = workerRepository;
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
        if (newUser.getSaltedHashedPassword() != null) {
            oldUser.setSaltedHashedPassword(newUser.getSaltedHashedPassword());
        }
        return userRepository.save(oldUser);
    }

    public boolean checkUserNameNotUnique(String userName) {
        return userRepository.existsByUserName(userName);
    }
}
