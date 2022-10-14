package com.someSpring.Services;

import com.someSpring.Configuration.CustomException;
import com.someSpring.Model.UserModel2;
import com.someSpring.Repo.UserModel2Repo;
import com.someSpring.Request.UserRequest;
import com.someSpring.Request.UserRequest2;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserModel2Service {
    @Autowired
    UserModel2Repo userModel2Repo;

    @Autowired
    Environment environment;

    public boolean addUser2(UserRequest userRequest) throws Exception{
        System.out.println("Inside add user 2 service now..");
        try{
            Optional <UserModel2> aUser = userModel2Repo.getUserByEmail(userRequest.getEmail());

            if(aUser.isPresent()){
                throw new Exception("Email already exist");
            }

            UserModel2 userModel2 = new UserModel2(0, "", 0, userRequest.getEmail(), "", userRequest.getPassword(), "", "");
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

                String token = generateToken(aUser.get());
                aUser.get().setToken(token);
                userModel2Repo.setToken(token, aUser.get().getId());

                return aUser.get();
            }else{
                throw new Exception("Error in user details");
            }
        }catch (Exception e){
            e.printStackTrace();
            throw e;
        }
    }

    public void logout(Integer user_id) throws CustomException{
//        try{
            Optional <UserModel2> userModel2 = userModel2Repo.findById(user_id);

            if(userModel2.isPresent()){
                userModel2Repo.setToken("", userModel2.get().getId());
            }else{
                throw new CustomException("Error in logout");
            }

//        }catch(Exception e){
//            e.printStackTrace();
//            throw e;
//        }
    }

    public String generateToken(UserModel2 userModel2){
//        String token = Base64.getEncoder().encode(userModel2.getEmail().getBytes()).toString() + Base64.getEncoder().encode(userModel2.getName().getBytes()).toString();

        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.MINUTE, 10);

        String token = Jwts.builder()
                .claim("email", userModel2.getEmail())
                .claim("name", userModel2.getName())
                .setSubject(userModel2.getName())
                .setId("" + userModel2.getId())
                .setIssuedAt(new Date())
                .setExpiration(calendar.getTime())
                .signWith(SignatureAlgorithm.HS512, environment.getProperty("jwt_token"))
                .compact();

        return token;
    }

    public boolean isTokenAlive(String token) throws CustomException{
        System.out.println("in is token alive");

        try{
            Jwts.parser().setSigningKey(environment.getProperty("jwt_token")).parseClaimsJws(token);
            return true;
        }catch(ExpiredJwtException e){
            throw new CustomException("token has expired");
        }
        catch(Exception e){
            throw new CustomException("error with token in token alive");
        }


    }

    public boolean validateToken(Integer user_id, String token) throws CustomException{
//        try{
        System.out.println("in validate token");
            Optional <UserModel2> userModel2 = userModel2Repo.findById(user_id);

            if(userModel2.isPresent()){
                if(token.equals(userModel2.get().getToken())){
                    System.out.println("token match!");
                    return true;
                }else{
                    throw new CustomException("Error in token...");
                }
            }else{
                throw new CustomException("Error in token validation");
            }
//        }catch(Exception e){
//            e.printStackTrace();
//            throw e;
//        }
    }

    public void setUserProfilePic(Integer user_id, String profilePic) throws CustomException{
        try{
            userModel2Repo.setProfilePic(user_id, profilePic);
        }catch (Exception e){
            throw new CustomException("error in set user profile pic");
        }
    }

    public String getUserProfilePic(Integer user_id) throws CustomException{
        try{
            return userModel2Repo.getProfilePic(user_id);
        }catch (Exception e){
            throw new CustomException("error in get user profile pic");
        }
    }
}
