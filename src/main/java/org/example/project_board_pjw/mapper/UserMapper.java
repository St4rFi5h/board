package org.example.project_board_pjw.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.example.project_board_pjw.domain.User;

@Mapper
public interface UserMapper {
    int insertUser(User user);

    int findByUserId(String userId);

    User selectUserById(String userId);
}