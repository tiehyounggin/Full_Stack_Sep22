package com.someSpring.Controller;

import com.someSpring.GeneralResponses.GeneralResponse;
import com.someSpring.Model.CalculatorModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalculatorController {


    @PostMapping("/calculator")
    public ResponseEntity<?> calculator(@RequestBody CalculatorModel calculatorModel){

        GeneralResponse generalResponse = new GeneralResponse();
        double result = 0;

        if(calculatorModel.getAnOperator() == CalculatorModel.operator.addition){
            result = calculatorModel.getNum1() + calculatorModel.getNum2();
            generalResponse.setMessage(calculatorModel.getNum1() + " + " + calculatorModel.getNum2() + " = " + result);
            return ResponseEntity.ok(generalResponse);
        } else if (calculatorModel.getAnOperator() == CalculatorModel.operator.subtraction) {
            result = calculatorModel.getNum1() - calculatorModel.getNum2();
            generalResponse.setMessage(calculatorModel.getNum1() + " - " + calculatorModel.getNum2() + " = " + result);
            return ResponseEntity.ok(generalResponse);
        } else if (calculatorModel.getAnOperator() == CalculatorModel.operator.multiplication) {
            result = calculatorModel.getNum1() * calculatorModel.getNum2();
            generalResponse.setMessage(calculatorModel.getNum1() + " x " + calculatorModel.getNum2() + " = " + result);
            return ResponseEntity.ok(generalResponse);
        }else if(calculatorModel.getAnOperator() == CalculatorModel.operator.division){
            result = calculatorModel.getNum1() / calculatorModel.getNum2();
            generalResponse.setMessage(calculatorModel.getNum1() + " / " + calculatorModel.getNum2() + " = " + result);
            return ResponseEntity.ok(generalResponse);
        }else{

        }

        generalResponse.setMessage("ERROR");
        return ResponseEntity.badRequest().body(generalResponse);
    }
}
