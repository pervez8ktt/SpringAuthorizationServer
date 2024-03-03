package com.knitkota.javademo.authserver.authpack.entity.repository;

import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.knitkota.javademo.authserver.authpack.entity.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, String> {
	Optional<Client> findByClientId(String clientId);
}
