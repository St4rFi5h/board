package org.example.project_board_pjw.service;

import lombok.RequiredArgsConstructor;
import org.example.project_board_pjw.domain.User;
import org.example.project_board_pjw.mapper.UserMapper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class UserService {

    private final UserMapper userMapper;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    /*회원가입*/
    public void register(User user) {
        user.setUserPw(encoder.encode(user.getUserPw()));
        user.setCreateId("SYSTEM");
        userMapper.insertUser(user);
    }
   /*회원 존재여부 체크*/
    public boolean existsById(String userId) {
        return userMapper.findByUserId(userId) > 0;
    }

    /*로그인 유저 존재 반환*/
    public User findUserById(String userId) {
        return userMapper.selectUserById(userId);
    }
    /*로그인 비밀번호 일치 확인 */
    public boolean matches(String rawPw, String encodedPw) {
        return encoder.matches(rawPw, encodedPw);
    }



}