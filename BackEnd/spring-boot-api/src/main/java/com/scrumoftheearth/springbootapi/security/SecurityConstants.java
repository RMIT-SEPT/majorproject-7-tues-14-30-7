package com.scrumoftheearth.springbootapi.security;

public class SecurityConstants {
    static public final long JWT_EXPIRE_TIME = 86_400_000; // 1 Day in ms
    // Secret key generated with openssl rand.
    // TODO: CHANGE SECRET TO BE KEPT EXTERNALLY.
    // NOTICE THIS IS A DEVELOPMENT KEY AND WILL NOT BE USED IN PROPER PRODUCTION!
    static public final String SECRET_KEY = "28b6e04d27c2c496b2b6effddafa169950e3a807966bd2b9d21e114c48a588f27ff3efb9f97777a74a54bbbf5ce17b188a5ba69278c8146767e21d1444b0aa1f";
    static public final String HEADER_TAG = "Authorization";
    static public final String TOKEN_PREFIX = "Bearer ";
}
