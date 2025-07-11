package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.jwt.service.JwtService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
public class AuthController {

    @Autowired
    private JwtService jwtService;

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        System.out.println("Authorization Header: " + authHeader);

        if (authHeader == null || !authHeader.startsWith("Basic ")) {
            return ResponseEntity.status(401).body("Missing or invalid Authorization header");
        }

        try {
            String base64Credentials = authHeader.substring("Basic ".length());
            String credentials = new String(java.util.Base64.getDecoder().decode(base64Credentials));
            System.out.println("Decoded credentials: " + credentials);

            String[] values = credentials.split(":", 2);

            if (values.length < 2) {
                return ResponseEntity.status(400).body("Malformed credentials");
            }

            String username = values[0];
            String password = values[1];

            System.out.println("Username: " + username + ", Password: " + password);

            if ("user".equals(username) && "pwd".equals(password)) {
                String token = jwtService.generateToken(username);
                return ResponseEntity.ok().body(java.util.Map.of("token", token));
            }

            return ResponseEntity.status(401).body("Invalid credentials");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(400).body("Invalid authentication request");
        }
    }
}
