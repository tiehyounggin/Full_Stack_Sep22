package com.someSpring.Services;

import com.someSpring.Model.UserModel2;
import com.someSpring.Repo.UserModel2Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserModel2Service {
    @Autowired
    UserModel2Repo userModel2Repo;

    public void addUser2(){
        System.out.println("Inside add user 2 service now..");
        userModel2Repo.save(new UserModel2("sample name", 9999));
    }

    public void getAllUser(){
        userModel2Repo.findAll().forEach(obj ->{
            System.out.println(obj.getId() + " " + obj.getName() + " - " + obj.getMobile());
        });
    }
}
