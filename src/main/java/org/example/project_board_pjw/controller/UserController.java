package org.example.project_board_pjw.controller;

import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.example.project_board_pjw.domain.User;
import org.example.project_board_pjw.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
  /** 회원가입  */
    @PostMapping("/register")
    public ResponseEntity<String> register( @RequestParam("userId") String userId, @RequestParam("userPw") String userPw, @RequestParam("userNm") String userNm, @RequestParam(value = "file", required = false) MultipartFile file) throws IOException
    {
        /*중복유저 체크*/
        if (userService.existsById(userId)){
            return ResponseEntity.badRequest().body("이미 존재하는 아이디입니다.");
        }

        String profilePath = null; //이미지 경로 null 초기화
        if (file != null && !file.isEmpty()) {
            String path = "C:/uploads/profile/";
            File dir = new File(path);
            if (!dir.exists()) dir.mkdirs(); //폴더없으면 생성

            String newName = UUID.randomUUID() + "_" + file.getOriginalFilename();  //파일명칭 중복안되야함
            file.transferTo(new File(path + newName));
            profilePath = "/profile/" + newName;
        }

            User user = new User();
            user.setUserId(userId);
            user.setUserPw(userPw);
            user.setUserNm(userNm);
            user.setProfileImg(profilePath);

        userService.register(user);
        return ResponseEntity.ok("회원가입 성공");
    }
    /*회원가입 코드끝*/

    /** 로그인  */
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user, HttpSession session) {
        System.out.println("로그인 시도: " + user.getUserId());
        System.out.println("로그인 직전 세션 ID: " + session.getId());
        User dbUser = userService.findUserById(user.getUserId());
        if (dbUser == null) {
            return ResponseEntity.badRequest().body("존재하지 않는 아이디입니다.");
        }

        if (!userService.matches(user.getUserPw(), dbUser.getUserPw())) {
            return ResponseEntity.badRequest().body("비밀번호가 일치하지 않습니다.");
        }

        // 세션 생성
        session.setAttribute("loginUser", dbUser);
        System.out.println("로그인 후 세션 ID: " + session.getId());
        session.setMaxInactiveInterval(30 * 60); // 30분 유지
        return ResponseEntity.ok("로그인 성공");
    }

    //세션체크
    @GetMapping("/session")
    public ResponseEntity<?> getSession(HttpSession session) {

        User loginUser = (User) session.getAttribute("loginUser");
        if (loginUser == null) {
            return ResponseEntity.badRequest().body("로그인 상태가 아닙니다.");
        }
        return ResponseEntity.ok(loginUser);
    }



    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpSession session) {
        session.invalidate();
        return ResponseEntity.ok("로그아웃 완료");
    }


}