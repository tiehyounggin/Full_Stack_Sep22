package Homework_0310;

public class Child extends Abstract implements InterfaceClassIntr1, InterfaceClassIntr2{

    @Override
    public void printMessage() {
        System.out.println("Hello, I am from Child");
    }

    public void testMessage(){
        System.out.println("TEST message from child");
    }

    public static void main(String[] args) {
        Child myChild = new Child();
        myChild.printMessage();
        myChild.testMessage();

        myChild.printMessageIntr1();
        myChild.printMessageIntr2();

        InterfaceClassIntr1 test1 = new Child();
        test1.printMessageIntr1();
//        test1.testMessage();

        Abstract test2 = new Child();
        test2.printMessage();
    }

    @Override
    public void printMessageIntr1() {
        System.out.println("Hello, I am from Interface 1");
    }

    @Override
    public void printMessageIntr2() {
        System.out.println("Hello, I am from Interface 2");
    }
}
