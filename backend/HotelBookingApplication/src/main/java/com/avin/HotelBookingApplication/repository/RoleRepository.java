package com.avin.HotelBookingApplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.avin.HotelBookingApplication.model.Role;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;


public interface RoleRepository extends JpaRepository<Role, Long> {

    @Query("SELECT r FROM Role r WHERE LOWER(TRIM(r.name)) = LOWER(TRIM(:name))")
    Optional<Role> findByRoleName(@Param("name") String name);




    boolean existsByName(String role);
}
