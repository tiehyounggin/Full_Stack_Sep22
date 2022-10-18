package com.springcloud.service1.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.circuitbreaker.CircuitBreaker;
import org.springframework.cloud.client.circuitbreaker.CircuitBreakerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/service1")
public class TestController{

    @Autowired
    RestTemplate restTemplate;

    @Autowired
    CircuitBreakerFactory circuitBreakerFactory;

    @GetMapping("/getSomeMessage1")
    public String getSomeMessage1(){
        return "test test from service1 getSomeMessage1";
    }

    @GetMapping("/getService2API")
    public String getService2API(){
        String response = restTemplate.getForObject("http://localhost:8082/service2/getSomeMessage", String.class);
        System.out.println("Hello im from service1 calling service2 api...");
        return "ok";
    }

    @GetMapping("/getSampleTest")
    public String getSampleTest(){
        CircuitBreaker circuitBreaker = circuitBreakerFactory.create("some circuit breaker");

        String realUrl = "https://jsonplaceholder.typicode.com/albums";
        String fakeUrl = "jkashdjsahdjasldksa";

        return circuitBreaker.run(() -> restTemplate.getForObject(fakeUrl, String.class), throwable -> getErrorMessage());
    }

    public String getErrorMessage(){
        return "Error error error...";
    }
}
