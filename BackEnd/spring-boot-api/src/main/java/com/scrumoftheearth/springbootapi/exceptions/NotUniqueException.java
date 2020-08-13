package com.scrumoftheearth.springbootapi.exceptions;

import org.springframework.http.HttpStatus;

public class NotUniqueException extends RequestException {

    public NotUniqueException(String message, HttpStatus code) {
        super(message, code);
    }

}
