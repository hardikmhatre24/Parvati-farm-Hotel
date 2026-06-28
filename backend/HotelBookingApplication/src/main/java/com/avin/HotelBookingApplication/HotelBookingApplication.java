package com.avin.HotelBookingApplication;

import com.avin.HotelBookingApplication.model.Role;
import com.avin.HotelBookingApplication.model.User;
import com.avin.HotelBookingApplication.repository.RoleRepository;
import com.avin.HotelBookingApplication.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashSet;

@SpringBootApplication
public class HotelBookingApplication {

	public static void main(String[] args) {
		SpringApplication.run(HotelBookingApplication.class, args);
	}

	@Bean
	CommandLineRunner run(UserRepository userRepository,
	                      RoleRepository roleRepository,
	                      PasswordEncoder encoder) {

		return args -> {
	
			System.out.println("🔥 INIT RUNNER");

			// ROLE INIT (SAFE)
			Role adminRole = roleRepository.findByName("ROLE_ADMIN")
					.orElseGet(() -> {
						Role r = new Role();
						r.setName("ROLE_ADMIN");
						return roleRepository.save(r);
					});

			// USER INIT
			if (userRepository.findByEmail("admin@gmail.com").isEmpty()) {

				User admin = new User();
				admin.setEmail("admin@gmail.com");
				admin.setFirstName("Admin");
				admin.setLastName("User");

				admin.setPassword(encoder.encode("admin123"));

				HashSet<Role> roles = new HashSet<>();
				roles.add(adminRole);

				admin.setRoles(roles);

				userRepository.save(admin);

				System.out.println("✅ ADMIN CREATED");
			} else {
				System.out.println("ℹ️ ADMIN EXISTS");
			}
		};
	}
}