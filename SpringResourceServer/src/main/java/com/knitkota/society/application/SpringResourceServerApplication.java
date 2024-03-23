package com.knitkota.society.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class SpringResourceServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringResourceServerApplication.class, args);
	}

}
