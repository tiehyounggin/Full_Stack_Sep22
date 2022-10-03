public class Homework2909_Q2 {

    String[] myStrArr = {"String 1", "String 2", "String 3"};
    Long[] myLongArr = {2313L, 741329L, 9934L, 5952L, 8479321L};

    public static void main(String[] args) {
        Homework2909_Q2 homework2909_Q2 = new Homework2909_Q2();

        System.out.println("Printing string array:");
        for (String s:homework2909_Q2.myStrArr) {
            System.out.println(s);
        }

        System.out.println("Printing long array:");
        for (long l:homework2909_Q2.myLongArr) {
            System.out.println(l);
        }
    }


}
