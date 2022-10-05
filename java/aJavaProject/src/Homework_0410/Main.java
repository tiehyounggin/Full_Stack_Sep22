package Homework_0410;

import com.sun.source.tree.Tree;

import java.util.ArrayList;
import java.util.Collections;
import java.util.TreeSet;

public class Main {
    public static void main(String[] args) {
        ArrayList<Product> myArrList = new ArrayList<Product>();
        ArrayList<User> myArrListTest = new ArrayList<User>();
        TreeSet<User> myTreeSet = new TreeSet<User>();

        myArrList.add(new Product("product1", 88.88));
        myArrList.add(new Product("product2", 24.52));
        myArrList.add(new Product("product3", 52));
        myArrList.add(new Product("product4", 17.49));

//        CustomComparator customComparator = new CustomComparator();

        for (Product product:myArrList ) {
            System.out.println(product.getName() + ": " + product.getPrice());
        }

        Collections.sort(myArrList, new CustomPriceComparator());
        System.out.println("-----After sorting-----");

        for (Product product:myArrList ) {
            System.out.println(product.getName() + ": " + product.getPrice());
        }

        System.out.println("-----------------------");
        System.out.println("-----------------------");

        myTreeSet.add(new User("Acute", 74));
        myTreeSet.add(new User("amy", 42));
        myTreeSet.add(new User("Johnny", 16));
        myTreeSet.add(new User("johnny", 62));
        myTreeSet.add(new User("Tim", 23));
        myTreeSet.add(new User("simon", 54));

        for (User user :myTreeSet ) {
            System.out.println(user.getName() + " - " + user.getAge());
        }

//        myTreeSet.descendingSet();
//        for (User user :myTreeSet.descendingSet() ) {
//            System.out.println(user.getName() + " - " + user.getAge());
//        }
        System.out.println("aaaaaaaaaaaaaaaaaaa");
        myArrListTest.add(new User("Acute", 74));
        myArrListTest.add(new User("amy", 42));
        myArrListTest.add(new User("Johnny", 16));
        myArrListTest.add(new User("johnny", 62));
        myArrListTest.add(new User("Tim", 23));
        myArrListTest.add(new User("simon", 54));

        Collections.sort(myArrListTest, new AnotherCustomComparator.sortUserNameDsc());
        for (User user :myArrListTest ) {
            System.out.println(user.getName() + " - " + user.getAge());
        }

        System.out.println("-----------------------");
        System.out.println("-----------------------");


    }

}
