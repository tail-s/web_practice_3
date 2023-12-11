package jes.api.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Log4j2
@RestController
@RequestMapping(value = "/hello")
public class HelloController {

    @GetMapping
    public ResponseEntity<String> hello() {
        log.info("Hello Controller Passed");
        return ResponseEntity.ok().body("히히 이제 시작이야...");
    }
}
