package com.someSpring.Controller;

import com.someSpring.GeneralResponses.GeneralResponse;
import com.someSpring.Model.UserModel;
import com.someSpring.Model.UserModel2;
import com.someSpring.Request.UserRequest2;
import com.someSpring.Services.UserModel2Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserModel2Service userModel2Service;

    @GetMapping("/user")
    public ResponseEntity<?> getUser(){
        ArrayList<UserModel> myArrList = new ArrayList<>();
        GeneralResponse generalResponse = new GeneralResponse();

        myArrList.add(new UserModel("user1", "password1"));
        myArrList.add(new UserModel("user2", "password2"));
        myArrList.add(new UserModel("user3", "password3"));
        myArrList.add(new UserModel("user4", "password4"));
        myArrList.add(new UserModel("user5", "password5"));

        return ResponseEntity.ok(myArrList);
    }

    @GetMapping("/user/{user_id}")
    public ResponseEntity<?> getUser(@PathVariable Integer user_id){
        HashMap<Integer, UserModel> myHashMap = new HashMap<>();
        GeneralResponse generalResponse = new GeneralResponse();

        for(int i=1; i<=10; i++){
            myHashMap.put(i, new UserModel("user" + i, "password" + i));
        }
//        System.out.println(user_id);
//        for (UserModel userModel : myHashMap.values()) {
//            System.out.println(userModel.getUsername() + " -- " + userModel.getPassword());
//        }

        if(myHashMap.containsKey(user_id)){
            generalResponse.setMessage("User found");
            return ResponseEntity.ok(generalResponse);
        }else{
            generalResponse.setMessage("User not found!");
            return ResponseEntity.badRequest().body(generalResponse);
        }
    }

//    @GetMapping("/test/{user_id}")
//    public boolean getTest(@PathVariable Integer user_id) throws Exception {
//        HashMap<Integer, UserModel> myHashMap = new HashMap<>();
//        GeneralResponse generalResponse = new GeneralResponse();
//
//        for(int i=1; i<=10; i++){
//            myHashMap.put(i, new UserModel("user" + i, "password" + i));
//        }
////        System.out.println(user_id);
////        for (UserModel userModel : myHashMap.values()) {
////            System.out.println(userModel.getUsername() + " -- " + userModel.getPassword());
////        }
//
//        if(myHashMap.containsKey(user_id)){
//            return true;
//        }else{
//            throw new Exception("asdkajfkdlasas");
//        }
//    }

    @PostMapping("/userCreate")
    public ResponseEntity<?> userCreate(){
        GeneralResponse generalResponse = new GeneralResponse();

//        userModel2Service.addUser2();

        generalResponse.setMessage("Creation is done");
        return ResponseEntity.ok(generalResponse);
    }

    @GetMapping("/userGet")
    public ResponseEntity<?> getAllUser(){
        GeneralResponse generalResponse = new GeneralResponse();

        List<UserModel2> myList = userModel2Service.getAllUser();

        generalResponse.setMessage("Getting whole list");
        return ResponseEntity.ok(myList);
    }

    @GetMapping("/userGet/{user_id}")
    public ResponseEntity<?> getOneUser(@PathVariable Integer user_id){
        UserModel2 userModel2 = userModel2Service.getOneUser(user_id);

        return ResponseEntity.ok(userModel2);
    }

    @PostMapping("/postUser/{user_id}")
    public ResponseEntity<?> postUser(@PathVariable Integer user_id, @RequestBody UserRequest2 userRequest2){

        GeneralResponse generalResponse = new GeneralResponse();

        try{
            userModel2Service.updateUser(user_id, userRequest2);
            generalResponse.setMessage("User has been updated");
            return ResponseEntity.ok(generalResponse);
        }catch (Exception e){
            generalResponse.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(generalResponse);
        }
    }

    @PostMapping("/deleteUser/{user_id}")
    public ResponseEntity<?> deleteUser(@PathVariable Integer user_id){
        GeneralResponse generalResponse = new GeneralResponse();

        try{
            userModel2Service.deleteUser(user_id);
            generalResponse.setMessage("User has been deleted");
            return ResponseEntity.ok(generalResponse);
        }catch (Exception e){
            generalResponse.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(generalResponse);
        }
    }
}
