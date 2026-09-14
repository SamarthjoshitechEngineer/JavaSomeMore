import java.util.Scanner;
public class ReducingZero {
    public static void main(String[]args){
Scanner sc=new Scanner(System.in);
System.out.println("enter a number");
int a=sc.nextInt();
System.out.println("enter upto what number of terms");
int n=sc.nextInt();
int sum=0;
int currentterm=0;
for(int i=n;i>=0;i--){
    currentterm=a*(int)Math.pow(10,i-1)+a;
sum+=currentterm;
}
System.out.println(sum);

    }
}
