package com.someSpring.Repo;

import com.someSpring.Model.UserModel2;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
public interface UserModel2Repo extends JpaRepository<UserModel2, Integer> {

    @Query("select userModel2 from UserModel2 userModel2 where email = ?1")
    Optional<UserModel2> getUserByEmail(String email);

    @Modifying
    @Transactional
    @Query("update UserModel2 set token = ?1 where id = ?2")
    void setToken(String token, Integer id);

    @Modifying
    @Transactional
    @Query("update UserModel2 set profile_pic = ?2 where id = ?1")
    void setProfilePic(Integer id, String profilePic);

    @Query("select profile_pic from UserModel2 where id = ?1")
    String getProfilePic(Integer user_id);
}
