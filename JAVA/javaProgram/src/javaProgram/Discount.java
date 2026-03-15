package javaProgram;

public class Discount {

	
	    public static void main(String[] args) {

	        double orderAmount = 4000;
	        double discount = 0;

	        if (orderAmount > 1000) {
	            discount = orderAmount * 0.10; // 10% discount
	        }

	        System.out.println("Discount Value: ₹" + discount);
	    }
	
}
