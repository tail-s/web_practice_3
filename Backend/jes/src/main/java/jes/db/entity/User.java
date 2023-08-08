package jes.db.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Builder
@Table(name = "USER")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue
    @Column(name = "USER_ID")
    private Long id;

    @Column(name = "ACCOUNT")
    private String account;

    @Column(name = "PASSWORD")
    private String password;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "NICKNAME")
    private String nickname;

    @Column(name = "IMG")
    private String imageUrl;

    @Column(name = "LEV")
    private int lev;

    @Column(name = "EXP")
    private int exp;

    @Enumerated(EnumType.STRING)
    @Column(name = "ROLE")
    private Role role;

    @Enumerated(EnumType.STRING)
    @Column(name = "TYPE")
    private Type type;

    @Column(name = "T_ID")
    private String tid;

    @Column(name = "R_TOKEN")
    private String refreshToken;


}
