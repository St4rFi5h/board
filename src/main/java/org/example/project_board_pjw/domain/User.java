package org.example.project_board_pjw.domain;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class User {
    private String userId;
    private String userPw;
    private String userSt;      // 유저 상태 (N: 일반, A: 관리자)
    private LocalDateTime createDt;
    private LocalDateTime updateDt;
}
