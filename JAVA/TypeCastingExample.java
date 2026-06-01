public class TypeCastingExample {
    public static void main(String[] args) {
        // double to int
        double d = 12.75;
        int intFromDouble = (int) d; // casts by truncating decimal part
        System.out.println("Original double: " + d);
        System.out.println("Double cast to int: " + intFromDouble);

        // int to double
        int i = 25;
        double doubleFromInt = (double) i;
        System.out.println("Original int: " + i);
        System.out.println("Int cast to double: " + doubleFromInt);
    }
}

