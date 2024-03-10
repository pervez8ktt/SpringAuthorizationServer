package com.knitkota.javademo.authserver.authpack.services;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.ClientAuthenticationMethod;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClient;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;

@Service
public class InitializationService {

	@Autowired
	JpaRegisteredClientRepository jpaRegisteredClientRepository;
	
	@PostConstruct
	public void onInit() {
		
		RegisteredClient registrarClient = RegisteredClient.withId(UUID.randomUUID().toString())
		.clientId("registrar-client")
		.clientSecret("{noop}secret")
		.clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_BASIC)
		.authorizationGrantType(AuthorizationGrantType.CLIENT_CREDENTIALS)
		.clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_POST)
		.scope("client.create")	
		.scope("client.read")	
		.build();
		
		
		jpaRegisteredClientRepository.save(registrarClient);
	}
	
}
