import java.util.Scanner;
public class Sum7Series{
    public static void main(String[]args){
Scanner sc=new Scanner(System.in);
System.out.println("Enter a number");
int a=sc.nextInt();
System.out.println("Enter upto What Number");
int n=sc.nextInt();
int currentterm=0,sum=0;
for(int i=1;i<=n;i++){
     currentterm=currentterm*10+a;
     sum+=currentterm;
}
System.out.println(sum);
    }
}