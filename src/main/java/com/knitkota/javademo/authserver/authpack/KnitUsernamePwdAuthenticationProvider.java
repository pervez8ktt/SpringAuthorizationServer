package com.knitkota.javademo.authserver.authpack;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class KnitUsernamePwdAuthenticationProvider implements AuthenticationProvider {

//	@Autowired
//	private PasswordEncoder passwordEncoder;

	private String user="user";
	private String password="password";

	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {

//		password= passwordEncoder.encode("password");
		
		String username = authentication.getName();
		String pwd = authentication.getCredentials().toString();

		SimpleGrantedAuthority simpleGrantedAuthority = new SimpleGrantedAuthority("USER");

		if (user.equals(username)) {
//			if (passwordEncoder.matches(pwd, password)) {
			if (password.equals(pwd)) {
				return new UsernamePasswordAuthenticationToken(username, pwd, Arrays.asList(simpleGrantedAuthority));
			} else {
				throw new BadCredentialsException("Invalid password!");
			}
		} else {
			throw new BadCredentialsException("No user registered with this details!");
		}

	}

	@Override
	public boolean supports(Class<?> authentication) {
		return (UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication));
	}

}
