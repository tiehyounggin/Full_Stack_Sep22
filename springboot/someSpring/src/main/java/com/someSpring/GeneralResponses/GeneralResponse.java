package com.someSpring.GeneralResponses;

public class GeneralResponse {

    String message = "";

    public GeneralResponse(){

    }

    public GeneralResponse(String message){
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
