package javaProgram;

public class Status {
	  public static void main(String[] args) {
	        String username = "admin";
	        String password = "1234";
	        String status = null;

	        if (username.equals("admin") && password.equals("1234")) {
	            status = "Login Successful";
	        }

	        System.out.println(status); // compile error
	    }
}
