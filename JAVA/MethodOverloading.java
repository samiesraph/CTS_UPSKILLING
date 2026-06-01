public class MethodOverloading {

    static int add(int a, int b) {
        return a + b;
    }

    static double add(double a, double b) {
        return a + b;
    }

    static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        System.out.println("Sum of two integers (2 + 3): " + add(2, 3));
        System.out.println("Sum of two doubles (2.5 + 3.5): " + add(2.5, 3.5));
        System.out.println("Sum of three integers (1 + 2 + 3): " + add(1, 2, 3));
    }
}

