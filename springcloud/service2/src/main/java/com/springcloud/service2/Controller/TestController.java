package com.springcloud.service2.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/service2")
public class TestController {

    @GetMapping("/getSomeMessage")
    public String getSomeMessage(){
        return "response from service2 getSomeMessage";
    }
}
