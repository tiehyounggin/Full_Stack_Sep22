package Homework_0510;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        HashMap<Integer, ArrayList<User>> myHashMap = new HashMap<Integer, ArrayList<User>>();

        ArrayList<User> myArrList1 = new ArrayList<User>();
        myArrList1.add(new User("tom", generateAge(), "list1address1"));
        myArrList1.add(new User("ainz", generateAge(), "list1address2"));
        myArrList1.add(new User("apple", generateAge(), "list1address3"));

        ArrayList<User> myArrList2 = new ArrayList<User>();
        myArrList2.add(new User("katy", generateAge(), "list2address1"));
        myArrList2.add(new User("adam", generateAge(), "list2address2"));
        myArrList2.add(new User("yikes", generateAge(), "list3address3"));

        ArrayList<User> myArrList3 = new ArrayList<User>();
        myArrList3.add(new User("acolyte", generateAge(), "list3address1"));
        myArrList3.add(new User("nani", generateAge(), "list3address2"));
        myArrList3.add(new User("abs", generateAge(), "list3address3"));

        myHashMap.put(1, myArrList1);
        myHashMap.put(2, myArrList2);
        myHashMap.put(3, myArrList3);

        System.out.println("Original items in hashmap:");

        for(Integer key: myHashMap.keySet()){
            System.out.println("hashmap key " + key + " -------------------------");

            for(User eachUser: myHashMap.get(key)){
                System.out.println(eachUser.getName() + " - " + eachUser.getAge() + " - " + eachUser.getAddress());
            }
        }

        System.out.println("---------------------------------------");
        System.out.println("Filter user age below 20:");


        for(ArrayList<User> eachArrList: myHashMap.values()){
            List<User> myFilteredUserList = (eachArrList.stream().filter(user -> user.getAge() < 20).toList());

            for(User user: myFilteredUserList){
                System.out.println(user.getName() + " " + user.getAge() + " " + user.getAddress());
            }
        }

        System.out.println("---------------------------------------");
        System.out.println("Filter username start with a and return first user:");

        for(ArrayList<User> eachArrList: myHashMap.values()){
            User filteredUser = (eachArrList.stream().filter(user -> user.getName().startsWith("a")).findFirst()).get();

            System.out.println(filteredUser.getName() + " " + filteredUser.getAge() + " " + filteredUser.getAddress());
        }

//        for(int i=1; i<5; i++){
//            ArrayList<User> myArrList = new ArrayList<>();
//
//            for(int j=1; j<=3; j++){
//                User user = new User("name" + j, generateAge(), "address" + j);
//                myArrList.add(user);
//            }
//
//            myHashMap.put(i, myArrList);
//        }

        /*
        //get value
        for (ArrayList<User> eachArrList: myHashMap.values()) {
            System.out.println(eachArrList.stream().count());
            for (User eachUser: eachArrList) {
                System.out.println(eachUser.getName() + " - " + eachUser.getAge() + " - " + eachUser.getAddress());
            }
        }
         */

//        System.out.println(myHashMap.keySet());

//        for(Integer key: myHashMap.keySet()){
//            System.out.println(key);
//        }
    }

    public static int generateAge(){
        int min = 1;
        int max = 40;

        Random random = new Random();
        return random.nextInt(max - min + 1) + min;
    }
}
