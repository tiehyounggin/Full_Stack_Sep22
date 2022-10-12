package com.someSpring.Repo;

import com.someSpring.Model.UserModel2;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserModel2Repo extends JpaRepository<UserModel2, Integer> {
}
