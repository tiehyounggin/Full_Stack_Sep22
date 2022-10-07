package com.someSpring.Controller;

import com.someSpring.GeneralResponses.GeneralResponse;
import com.someSpring.Model.Calculator;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalculatorController {

    @PostMapping("/calculator")
    public ResponseEntity<?> calculator(@RequestBody Calculator calculator){

        GeneralResponse generalResponse = new GeneralResponse();
        double result = 0;

        if(calculator.getAnOperator() == Calculator.operator.addition){
            result = calculator.getNum1() + calculator.getNum2();
            generalResponse.setMessage(calculator.getNum1() + " + " + calculator.getNum2() + " = " + result);
            return ResponseEntity.ok(generalResponse);
        } else if (calculator.getAnOperator() == Calculator.operator.subtraction) {
            result = calculator.getNum1() - calculator.getNum2();
            generalResponse.setMessage(calculator.getNum1() + " - " + calculator.getNum2() + " = " + result);
            return ResponseEntity.ok(generalResponse);
        } else if (calculator.getAnOperator() == Calculator.operator.multiplication) {
            result = calculator.getNum1() * calculator.getNum2();
            generalResponse.setMessage(calculator.getNum1() + " x " + calculator.getNum2() + " = " + result);
            return ResponseEntity.ok(generalResponse);
        }else if(calculator.getAnOperator() == Calculator.operator.division){
            result = calculator.getNum1() / calculator.getNum2();
            generalResponse.setMessage(calculator.getNum1() + " / " + calculator.getNum2() + " = " + result);
            return ResponseEntity.ok(generalResponse);
        }else{

        }

        generalResponse.setMessage("ERROR");
        return ResponseEntity.badRequest().body(generalResponse);
    }
}
