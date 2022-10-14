package com.someSpring.Configuration;

import com.someSpring.GeneralResponses.GeneralResponse;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class CommonException {

    @ExceptionHandler(CustomException.class)
    public ResponseEntity<?> handleException(CustomException e){
        GeneralResponse generalResponse = new GeneralResponse();

        generalResponse.setMessage(e.getMessage());
        return ResponseEntity.badRequest().body(generalResponse);
    }
}
