package com.someSpring.Controller;

import com.someSpring.GeneralResponses.GeneralResponse;
import com.someSpring.Model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class LoginController {

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user){
        ArrayList<User> myArrList = new ArrayList<>();
        GeneralResponse generalResponse = new GeneralResponse();

        myArrList.add(new User("admin", "admin"));
        myArrList.add(new User("tomcat", "password"));
        myArrList.add(new User("naruhodo", "naruhodo"));
        myArrList.add(new User("applepen", "pineapple"));

        for (User eachUser: myArrList ) {
            if(eachUser.getUsername().equals(user.getUsername())){
                if(eachUser.getPassword().equals(user.getPassword())){
                    generalResponse.setMessage("Logged in successfully!");
                    return ResponseEntity.ok(generalResponse);
                }
            }
        }
        generalResponse.setMessage("Username or password is incorrect");
        return ResponseEntity.badRequest().body(generalResponse);
    }
}
