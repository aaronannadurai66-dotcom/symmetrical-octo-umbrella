package javaProgram;

public class Value {
	  public static int getValue(int input) {
	        int value = 0;

	        if (input > 0) {
	            value = input * 2;
	        }

	        return value;   // Compilation error
	    }

	    public static void main(String[] args) {
	        System.out.println(getValue(5));
	    }
}
