package Homework_0310;

public class ExceptionManagement {

    public static void main(String[] args){
        int[] myArr = {1, 5, 23};

        try{
            System.out.println(isExist(myArr, 5));
        }catch(CustomException e){
            e.printStackTrace();
        }
    }

    public static boolean isExist(int[] myArr, int index) throws  CustomException{

        if(index > myArr.length){
            throw new CustomException("There is an error");
        }else {
            return true;
        }
    }
}
