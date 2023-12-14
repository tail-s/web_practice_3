package jes.db.dto.request;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;

@Builder
@AllArgsConstructor
public class LoginReqDTO {

    @NotNull
    @Size(min = 4, max = 15)
    private String username;

    @NotNull
    @Size(min = 8, max = 15)
    private String password;

}
