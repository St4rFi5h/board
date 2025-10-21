package org.example.project_board_pjw.service;

import lombok.RequiredArgsConstructor;
import org.example.project_board_pjw.domain.User;
import org.example.project_board_pjw.mapper.UserMapper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserMapper userMapper;

    public boolean registerUser(User user) {
        // 중복체크
        if (userMapper.findById(user.getUserId()) != null) {
            return false; // 이미 존재하는 아이디
        }
        // 회원가입 처리
        return userMapper.insertUser(user) > 0;
    }
}