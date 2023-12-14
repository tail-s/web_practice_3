package jes.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@OpenAPIDefinition(
        info = @Info(title = "JES: The Great Project",
                description = "JES API명세",
                version = "v1"))
@Configuration
public class SwaggerConfig {

//    http://localhost:8080/api/swagger-ui/index.html
    @Bean
    public GroupedOpenApi chatOpenApi() {
        String[] paths = {"/v1/**"};

        return GroupedOpenApi.builder()
                .group("JES API v1")
                .pathsToMatch(paths)
                .build();
    }
}
