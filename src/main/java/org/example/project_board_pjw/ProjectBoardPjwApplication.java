package org.example.project_board_pjw;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

//@SpringBootApplication
@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class ProjectBoardPjwApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProjectBoardPjwApplication.class, args);
    }

}
