package org.example.project_board_pjw.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.example.project_board_pjw.domain.User;

import java.util.List;

@Mapper
public interface UserMapper {

    // 회원 등록
    void insertUser(User user);

    // 단일 회원 조회 (이메일 기반)
    User selectUserById(@Param("userId") String userId);

    // 전체 회원 조회 (관리자용)
    List<User> selectAllUsers();

    // 아이디 중복검사
    int findByUserId(@Param("userId") String userId);
}