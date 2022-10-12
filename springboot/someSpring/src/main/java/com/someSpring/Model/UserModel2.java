package com.someSpring.Model;

import javax.persistence.*;

@Entity
@Table(name = "users2")
public class UserModel2 {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    Integer id;
    String name;
    int mobile;

    public UserModel2(){

    }

    public UserModel2(String name, int mobile){
        this.name = name;
        this.mobile = mobile;
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
}
