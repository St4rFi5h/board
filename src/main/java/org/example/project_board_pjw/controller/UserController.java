package org.example.project_board_pjw.controller;

import lombok.RequiredArgsConstructor;
import org.example.project_board_pjw.domain.User;
import org.example.project_board_pjw.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
@CrossOrigin(origins = "*")  // 프론트 연동용
public class UserController {

    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        boolean success = userService.registerUser(user);
        if (success) {
            return ResponseEntity.ok("회원가입 성공");
        } else {
            return ResponseEntity.badRequest().body("이미 존재하는 아이디입니다.");
        }
    }
}