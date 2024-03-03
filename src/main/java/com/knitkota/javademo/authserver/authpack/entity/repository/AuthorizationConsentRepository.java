package com.knitkota.javademo.authserver.authpack.entity.repository;

import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.knitkota.javademo.authserver.authpack.entity.AuthorizationConsent;

@Repository
public interface AuthorizationConsentRepository extends JpaRepository<AuthorizationConsent, AuthorizationConsent.AuthorizationConsentId> {
	Optional<AuthorizationConsent> findByRegisteredClientIdAndPrincipalName(String registeredClientId, String principalName);
	void deleteByRegisteredClientIdAndPrincipalName(String registeredClientId, String principalName);
}