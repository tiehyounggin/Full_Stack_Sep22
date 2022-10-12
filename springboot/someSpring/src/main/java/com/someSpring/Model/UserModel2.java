package com.someSpring.Model;

import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "users2")
public class UserModel2 {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    Integer id;
    String name;
    int mobile;
    String email;
    String address;
    @JsonIgnore
    String password;

    public UserModel2(){

    }

    public UserModel2(String name, int mobile, String email, String address, String password){
        this.name = name;
        this.mobile = mobile;
        this.email = email;
        this.address = address;
        this.password = password;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMobile() {
        return mobile;
    }

    public void setMobile(int mobile) {
        this.mobile = mobile;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
