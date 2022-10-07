package com.someSpring.Model;

public class Calculator {
    private double num1 = 0;
    private double num2 = 0;
    private operator anOperator;
    public enum operator {addition, subtraction, multiplication, division}

    public Calculator(){

    }

    public Calculator(double num1, double num2, operator anOperator){
        this.num1 = num1;
        this.num2 = num2;
        this.anOperator = anOperator;
    }

    public double getNum1() {
        return num1;
    }

    public void setNum1(double num1) {
        this.num1 = num1;
    }

    public double getNum2() {
        return num2;
    }

    public void setNum2(double num2) {
        this.num2 = num2;
    }

    public operator getAnOperator() {
        return anOperator;
    }

    public void setAnOperator(operator anOperator) {
        this.anOperator = anOperator;
    }
}
