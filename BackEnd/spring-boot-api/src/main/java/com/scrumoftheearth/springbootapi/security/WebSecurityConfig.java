package com.scrumoftheearth.springbootapi.security;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.Collections;

import static org.springframework.security.config.Customizer.withDefaults;

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
        http.csrf().disable().cors(withDefaults())
                .addFilter(new JWTAuthenticationFilter(authenticationManager()))
                .authorizeRequests()
                // Put here any routes that don't require role authorization
                // Allow all GET requests without Authorization.
                // This is temporary to allow front end to connect.
                    .antMatchers(HttpMethod.POST, "/api/user/").permitAll()
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

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.addAllowedOrigin(SecurityConstants.CROSS_ORIGIN_ALLOWED);
        configuration.setAllowedMethods(Arrays.asList("GET","POST", "PUT", "PATCH", "DELETE"));
        configuration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
