package Homework_0410;

import java.util.Comparator;

public class AnotherCustomComparator {
    public static class sortUserAgeAsc implements Comparator<User>{

        @Override
        public int compare(User u1, User u2) {
            return (u1.getAge() > u2.getAge()) ? 1 : (u1.getAge() < u2.getAge()) ? -1 :  0;
        }
    }

    public static class sortUserAgeDsc implements Comparator<User>{

        @Override
        public int compare(User u1, User u2) {
            return (u1.getAge() < u2.getAge()) ? 1 : (u1.getAge() > u2.getAge()) ? -1 :  0;
        }
    }

    public static class sortUserNameAsc implements Comparator<User>{

        @Override
        public int compare(User u1, User u2) {
            return u1.getName().compareTo(u2.getName());
        }
    }

    public static class sortUserNameDsc implements  Comparator<User>{

        @Override
        public int compare(User u1, User u2) {
            return u2.getName().compareTo(u1.getName());
        }
    }
}
