package com.someSpring.Controller;

import com.someSpring.GeneralResponses.GeneralResponse;
import com.someSpring.Model.Calculator;
import com.someSpring.Model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class UserController {

    @GetMapping("/user")
    public ResponseEntity<?> getUser(){
        ArrayList<User> myArrList = new ArrayList<>();
        GeneralResponse generalResponse = new GeneralResponse();

        myArrList.add(new User("user1", "password1"));
        myArrList.add(new User("user2", "password2"));
        myArrList.add(new User("user3", "password3"));
        myArrList.add(new User("user4", "password4"));
        myArrList.add(new User("user5", "password5"));

        return ResponseEntity.ok(myArrList);
    }


}
