package com.someSpring.Services;

import com.someSpring.Model.UserModel2;
import com.someSpring.Repo.UserModel2Repo;
import com.someSpring.Request.UserRequest;
import com.someSpring.Request.UserRequest2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserModel2Service {
    @Autowired
    UserModel2Repo userModel2Repo;

    public boolean addUser2(UserRequest userRequest) throws Exception{
        System.out.println("Inside add user 2 service now..");
        try{
            Optional <UserModel2> aUser = userModel2Repo.getUserByEmail(userRequest.getEmail());

            if(aUser.isPresent()){
                throw new Exception("Email already exist");
            }

            UserModel2 userModel2 = new UserModel2("", 0, userRequest.getEmail(), "", userRequest.getPassword());
            userModel2Repo.save(userModel2);
            return true;

        }catch(Exception e){
            e.printStackTrace();
            throw e;
        }
    }

    public List<UserModel2> getAllUser(){
//        userModel2Repo.findAll().forEach(obj ->{
//            System.out.println(obj.getId() + " " + obj.getName() + " - " + obj.getMobile());
//        });
        return userModel2Repo.findAll();
    }

    public UserModel2 getOneUser(Integer user_id){
        return userModel2Repo.findById(user_id).get();
    }

    public boolean updateUser(Integer user_id, UserRequest2 userRequest2) throws Exception{


        try{
            Optional <UserModel2> aUser = userModel2Repo.findById(user_id);

            if(aUser.isPresent()){
                UserModel2 userModel2 = userModel2Repo.findById(user_id).get();

                userModel2.setAddress(userRequest2.getAddress());
                userModel2.setEmail(userRequest2.getEmail());
                userModel2.setPassword(userRequest2.getPassword());
                userModel2.setName(userRequest2.getName());
                userModel2.setMobile(userRequest2.getMobile());

                userModel2Repo.save(userModel2);
                return true;
            }else{
                throw new Exception("User does not exist");
            }
        }catch (Exception e){
            e.printStackTrace();
            throw e;
        }
    }

    public boolean deleteUser(Integer user_id) throws Exception{


        try{
            Optional <UserModel2> aUser = userModel2Repo.findById(user_id);

            if(aUser.isPresent()){
                UserModel2 userModel2 = userModel2Repo.findById(user_id).get();

                userModel2Repo.delete(userModel2);
                return true;
            }else{
                throw new Exception("User does not exist");
            }


        }catch (Exception e){
            e.printStackTrace();
            throw e;
        }
    }

    public UserModel2 login(UserRequest userRequest)throws Exception{
        try{
            Optional<UserModel2> aUser = userModel2Repo.getUserByEmail(userRequest.getEmail());

            if(userModel2Repo.getUserByEmail(userRequest.getEmail()).stream().count() < 1){
                throw new Exception("Error in user details");
            }

            if(userRequest.getEmail().equals(aUser.get().getEmail()) && userRequest.getPassword().equals(aUser.get().getPassword())){
                return aUser.get();
            }else{
                throw new Exception("Error in user details");
            }
        }catch (Exception e){
            e.printStackTrace();
            throw e;
        }
    }
}
