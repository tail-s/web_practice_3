package jes.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@Configuration
@EnableWebSecurity  // Spring Security Filter가 Spring Filterchain에 등록이 됩니다.
public class SecurityConfig {

//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//
//    }



}
