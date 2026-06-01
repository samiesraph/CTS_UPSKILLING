import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class FileWriting {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a string to write to output.txt: ");
        String text = scanner.nextLine();

        try (FileWriter writer = new FileWriter("output.txt")) {
            writer.write(text);
            System.out.println("Written to output.txt successfully.");
        } catch (IOException e) {
            System.out.println("Error while writing to file: " + e.getMessage());
        } finally {
            scanner.close();
        }
    }
}

