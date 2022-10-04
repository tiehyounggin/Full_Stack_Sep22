package Homework_0410;

public class User implements  Comparable<User>{
    String name = "";
    int age = 0;

    public User(){

    }

    public User(String name, int age){
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public int compareTo(User user) {
        return this.getName().compareTo(user.getName());
    }
}

