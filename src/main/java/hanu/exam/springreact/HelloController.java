package hanu.exam.springreact;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class HelloController {

    @GetMapping("hello")
    public List<String> hello(){
        return Arrays.asList("하누모카", "퉷퉷");
    }
}
