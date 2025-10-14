package com.library.library_backend.controller;

import com.library.library_backend.model.User;
import com.library.library_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173") 
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public String signup(@RequestBody User user) {
        userRepository.save(user);
        return "User registered successfully!";
    }
}
