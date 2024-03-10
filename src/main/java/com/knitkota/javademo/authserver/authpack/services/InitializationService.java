package com.knitkota.javademo.authserver.authpack.services;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.ClientAuthenticationMethod;
import org.springframework.security.oauth2.core.oidc.OidcScopes;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClient;
import org.springframework.security.oauth2.server.authorization.settings.ClientSettings;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;

@Service
public class InitializationService {

	@Autowired
	JpaRegisteredClientRepository jpaRegisteredClientRepository;

	@PostConstruct
	public void onInit() {

		RegisteredClient registrarClient = RegisteredClient.withId(UUID.randomUUID().toString())
				.clientId("registrar-client").clientSecret("{noop}secret")
				.clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_BASIC)
				.authorizationGrantType(AuthorizationGrantType.CLIENT_CREDENTIALS)
				.clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_POST).scope("client.create")
				.scope("client.read").build();

		jpaRegisteredClientRepository.save(registrarClient);

		RegisteredClient registrarClient1 = RegisteredClient.withId(UUID.randomUUID().toString())
				.clientId("application-client").clientSecret("{noop}secret")

				.clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_BASIC)
				.clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_POST)

				.authorizationGrantType(AuthorizationGrantType.CLIENT_CREDENTIALS)
				.authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
				.authorizationGrantType(AuthorizationGrantType.REFRESH_TOKEN)

				.redirectUri("http://127.0.0.1:8080/login/oauth2/code/oidc-client")
				.redirectUri("https://oauth.pstmn.io/v1/callback")

				.postLogoutRedirectUri("http://127.0.0.1:8080/").scope(OidcScopes.OPENID).scope(OidcScopes.PROFILE)
				.clientSettings(ClientSettings.builder().requireAuthorizationConsent(true).build())

				.scope("client.create").scope("client.read").build();

		jpaRegisteredClientRepository.save(registrarClient1);
	}

}
