package com.someSpring.Controller;

import com.someSpring.Configuration.CustomException;
import com.someSpring.GeneralResponses.GeneralResponse;
import com.someSpring.Model.UserModel;
import com.someSpring.Model.UserModel2;
import com.someSpring.Request.UserRequest2;
import com.someSpring.Services.UserModel2Service;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserModel2Service userModel2Service;

    String imageFilePathAbs = "C:\\Users\\bluey\\OneDrive\\Documents\\GitHub\\Full_Stack_Sep22\\springboot\\someSpring\\src\\main\\java\\com\\someSpring\\Images\\";

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

    @PostMapping("/uploadImage")
    public ResponseEntity<?> uploadImage(@RequestParam Integer user_id, @RequestParam MultipartFile multipartFile) throws Exception {
        GeneralResponse generalResponse = new GeneralResponse();

        System.out.println(user_id + " " + multipartFile.getOriginalFilename());

        FileOutputStream fileOutputStream = new FileOutputStream(imageFilePathAbs + multipartFile.getOriginalFilename());
        fileOutputStream.write(multipartFile.getBytes());
        fileOutputStream.close();

        userModel2Service.setUserProfilePic(user_id, multipartFile.getOriginalFilename());

        generalResponse.setMessage("image upload successful");
        return ResponseEntity.ok(generalResponse);
    }

    @GetMapping(value = "/getImage/{user_id}", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
    public byte[] getImage(@PathVariable Integer user_id) throws Exception{

        String fileName = userModel2Service.getUserProfilePic(user_id);

        System.out.println(imageFilePathAbs + fileName);

        FileInputStream fileInputStream = new FileInputStream(imageFilePathAbs + fileName);
//        fileInputStream.close();

        return IOUtils.toByteArray(fileInputStream);
    }

}
