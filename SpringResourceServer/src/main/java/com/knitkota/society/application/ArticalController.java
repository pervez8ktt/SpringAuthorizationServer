package com.knitkota.society.application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ArticalController {

	@Autowired
	ArticalFeignClient articalFeignClient;
	
	@GetMapping("/articles")
    public String[] getArticles() {
		
		return articalFeignClient.getArticles();
		
//        return new String[] { "Article 1", "Article 2", "Article 3" };
    }
	
}
