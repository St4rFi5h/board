package org.example.project_board_pjw.domain;

import lombok.*;
import java.time.LocalDateTime;

/*사용자 테이블 */

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    /** 아이디 */
    private String userId;

    /** 암호 */
    private String userPw;

    /**이름 */
    private String userNm;

    /** 마지막 로그인 일자 */
    private LocalDateTime lastLoginDt;

    /** 프로필 이미지 경로 */
    private String profileImg;

    /** 스킨  */
    private String skinId;

    /** 포인트 */
    private Integer pointAmt;

    /** 탈퇴일 */
    private LocalDateTime leaveDt;

    /** 등록일 */
    private LocalDateTime createDt;

    /** 등록자 ID */
    private String createId;

    /** 수정일 */
    private LocalDateTime updateDt;

    /** 수정자 ID */
    private String updateId;

    /** 역할 (USER , ADMIN , ) */
    private String userRole;

    /** 사용자 상태 (N: 정상, D: 탈퇴, B: 차단 등) */
    private String userSt;

    /** 비고 */
    private String rmkTxt;
}