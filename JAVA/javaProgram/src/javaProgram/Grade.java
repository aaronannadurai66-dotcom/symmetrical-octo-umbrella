package javaProgram;

public class Grade {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int marks = 75;
        String grade;

        if (marks >= 90) {
            grade = "A";
        } else if (marks >= 75) {
            grade = "B";
        } else if (marks >= 50) {
            grade = "C";
        } else {
            grade = "Fail";
        }

        System.out.println("Grade: " + grade);
	}

}
