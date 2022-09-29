import java.util.ArrayList;
import java.util.Scanner;

public class Homework2909_Q1 {

    ArrayList myArrList = new ArrayList();

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        int totalNum = 0;

        Homework2909_Q1 homework2909_q1 = new Homework2909_Q1();

        System.out.println("Enter how many numbers followed by each numbers");
        totalNum = Integer.parseInt(scanner.nextLine());

        for(int i=0; i<totalNum; i++){
            homework2909_q1.myArrList.add(scanner.nextLine());
        }

        for (Object obj: homework2909_q1.myArrList) {
            if(Integer.parseInt(obj.toString()) > 10){
                System.out.println(obj + " is greater than 10");
            }else{
                System.out.println(obj + " is lesser than 10");
            }
        }
    }
}
