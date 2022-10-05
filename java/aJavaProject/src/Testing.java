import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Testing {
    public static void main(String[] args) {

        class Person{
            int age = 0;
            String name = "";

            public Person(){

            }

            public Person(int age, String name){
                this.age = age;
                this.name = name;
            }

            public void setAge(int age){
                this.age = age;
            }

            public int getAge(){
                return this.age;
            }

            public void setName(String name){
                this.name = name;
            }

            public String getName(){
                return this.name;
            }
        }

        ArrayList<Person> personList = new ArrayList<Person>();//will accept ony the stringnameList.add("person1");//0

        Person person1 = new Person();
        person1.setAge(45);
        person1.setName("person1");


        Person person2 = new Person();
        person2.setAge(15);
        person2.setName("person2");

        Person person3 = new Person();
        person3.setAge(5);
        person3.setName("person3");

        Person person4 = new Person();
        person4.setAge(10);
        person4.setName("person4");

        personList.add(person1);//adding the object to arraylist.
        personList.add(person2);
        personList.add(person3);
        personList.add(person4);


        personList.forEach((obj)->{
            System.out.println(obj.getAge()+" "+obj.getName());
        });

        System.out.println("------------------");

        List<Integer> ageList = personList.stream().map((obj)->obj.getAge()+5).collect(Collectors.toList());
        List<Integer> ageList1 = personList.stream().filter((obj)->obj.getAge()<=10).map((obj)->obj.getAge()+5).collect(Collectors.toList());

        //System.out.println(ageList1);


        /*
        //Array is immutable!!
        List<Integer> myIntegerList = Arrays.asList(5,2,34);
        myIntegerList.add(77);
        System.out.println(myIntegerList);
        */

        /*
        //Array is mutable!!
        List<Integer> myIntegerList2 = new ArrayList<>(Arrays.asList(1,2,3));
        myIntegerList2.add(11);
        System.out.println(myIntegerList2);
         */
    }
}
