package com.knitkota.society.application;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import com.knitkota.society.application.feign.oauth.OAuthFeignConfig;

@FeignClient(
		  name = "resource-server-two", 
		  url = "http://localhost:9002",
		  configuration = OAuthFeignConfig.class)
public interface ArticalFeignClient {

	@GetMapping("/articles")
    public String[] getArticles();
	
}
