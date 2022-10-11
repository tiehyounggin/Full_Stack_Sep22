package com.someSpring.Controller;

import com.someSpring.GeneralResponses.GeneralResponse;
import com.someSpring.Model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class LoginController {
//    @Autowired

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserModel userModel){
        ArrayList<UserModel> myArrList = new ArrayList<>();
        GeneralResponse generalResponse = new GeneralResponse();

        myArrList.add(new UserModel("admin", "admin"));
        myArrList.add(new UserModel("tomcat", "password"));
        myArrList.add(new UserModel("naruhodo", "naruhodo"));
        myArrList.add(new UserModel("applepen", "pineapple"));

        for (UserModel eachUser: myArrList ) {
            if(eachUser.getUsername().equals(userModel.getUsername())){
                if(eachUser.getPassword().equals(userModel.getPassword())){
                    generalResponse.setMessage("Logged in successfully!");
                    return ResponseEntity.ok(generalResponse);
                }
            }
        }
        generalResponse.setMessage("Username or password is incorrect");
        return ResponseEntity.badRequest().body(generalResponse);
    }

    @PostMapping("/login2")
    public ResponseEntity<?> login2(@RequestParam String username, @RequestParam String password){
        ArrayList<UserModel> myArrList = new ArrayList<>();
        GeneralResponse generalResponse = new GeneralResponse();

        myArrList.add(new UserModel("admin", "admin"));
        myArrList.add(new UserModel("tomcat", "password"));
        myArrList.add(new UserModel("naruhodo", "naruhodo"));
        myArrList.add(new UserModel("applepen", "pineapple"));

        System.out.println(username + " -- " + password);

        for (UserModel eachUser: myArrList ) {
            if(eachUser.getUsername().equals(username)){
                if(eachUser.getPassword().equals(password)){
                    generalResponse.setMessage("Logged in successfully!");
                    return ResponseEntity.ok(generalResponse);
                }
            }
        }
        generalResponse.setMessage("Username or password is incorrect");
        return ResponseEntity.badRequest().body(generalResponse);
    }
}
