package com.scrumoftheearth.springbootapi.exceptions;

import org.springframework.http.HttpStatus;

public class RequestException extends Exception {

    private final HttpStatus errorStatusCode;

    public RequestException(HttpStatus errorStatusCode) {
        super();
        this.errorStatusCode = errorStatusCode;
    }

    public RequestException(String message, HttpStatus errorStatusCode) {
        super(message);
        this.errorStatusCode = errorStatusCode;
    }

    public RequestException(Throwable cause, HttpStatus errorStatusCode) {
        super(cause);
        this.errorStatusCode = errorStatusCode;
    }

    public RequestException(String message, HttpStatus errorStatusCode, Throwable error) {
        super(message, error);
        this.errorStatusCode = errorStatusCode;
    }

    public HttpStatus getErrorStatusCode() {
        return errorStatusCode;
    }
}
