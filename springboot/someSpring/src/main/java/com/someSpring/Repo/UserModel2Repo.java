package com.someSpring.Repo;

import com.someSpring.Model.UserModel2;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserModel2Repo extends JpaRepository<UserModel2, Integer> {

    @Query("select userModel2 from UserModel2 userModel2 where email = ?1")
    Optional<UserModel2> getUserByEmail(String email);
}
