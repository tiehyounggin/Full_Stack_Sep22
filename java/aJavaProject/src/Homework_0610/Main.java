package Homework_0610;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        ArrayList<User> myArrList = new ArrayList<>();
        String pathName = Paths.get("").toAbsolutePath() + "\\src\\Homework_0610\\";
        String fileName = "Sample File.txt";

        for(int i=1; i<=10; i++){
            myArrList.add(new User("name " + i, "address " + i));
        }

        File aFile = new File(pathName + fileName);

        if(aFile.exists()){
            System.out.println("File found");
//            try {
//                System.out.println(new File(".").getCanonicalPath());
//                System.out.println(Paths.get("").toAbsolutePath());
//                System.out.println(new File("./").getAbsolutePath());
//                System.out.println(Files.readString(Paths.get("src\\Homework_0610\\", fileName)));
//            } catch (Exception e) {
//                e.printStackTrace();
//            }
        }else{
            System.out.println("File is nowhere to be found");
            try{
                aFile.createNewFile();
                System.out.println("File is created successfully!");
            }catch (Exception e){
                e.printStackTrace();
            }
        }

        for (User user: myArrList ) {
            writeToFile(aFile, user);
        }

    }

    public static void writeToFile(File filename, User user){

        String myString = "";

        try{
            FileOutputStream fileOutputStream = new FileOutputStream(filename, true);

            LocalDateTime localDateTime = LocalDateTime.now();
            String formattedLocalDateTime = DateTimeFormatter.ofLocalizedDateTime(FormatStyle.MEDIUM).format(localDateTime);

            myString = "[" + formattedLocalDateTime + "] " + user.getName() + ", " + user.getAddress() + "\r\n";

            fileOutputStream.write(myString.getBytes());
            fileOutputStream.close();
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
