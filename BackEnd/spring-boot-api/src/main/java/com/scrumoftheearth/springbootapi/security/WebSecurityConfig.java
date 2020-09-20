package com.scrumoftheearth.springbootapi.security;

import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final SecurityUserService securityUserService;
    private final PasswordEncoder  bCryptPasswordEncoder;

    public WebSecurityConfig(SecurityUserService securityUserService, PasswordEncoder bCryptPasswordEncoder) {
        this.securityUserService = securityUserService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().disable().csrf().disable()
                .addFilter(new JWTAuthenticationFilter(authenticationManager()))
                .authorizeRequests()
                // Put here any routes that don't require role authorization
                // Allow all GET requests without Authorization.
                // This is temporary to allow front end to connect.
                    .antMatchers(HttpMethod.POST, "/user/").permitAll()
                    .antMatchers(HttpMethod.GET, "/api/Business/**").permitAll()
                    .antMatchers(HttpMethod.GET, "/api/worker/**").permitAll()
                    .antMatchers(HttpMethod.GET, "/api/service**").permitAll()
                    .anyRequest().authenticated()
                    .and()
                // Login and logout still work without these filters.
//                .formLogin()
//                    .permitAll()
//                    .and()
//                .logout()
//                    .and()
                .addFilter(new JWTAuthorizationFilter(securityUserService, authenticationManager()))
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(securityUserService).passwordEncoder(bCryptPasswordEncoder);
    }
}
