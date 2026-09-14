import java.util.Scanner;
public class NumFactorial {
    public static int fact(int n){
        int factorial=1;
        for(int i=1;i<=n;i++){
factorial*=i;
        }
return factorial;
    }
    public static void main(String[]args){
Scanner sc=new Scanner(System.in);
System.out.println("enter upto what number");
int n=sc.nextInt();
int sum=0;
for(int i=1;i<=n;i++){
    if(i%2==0){
sum=sum+fact(i);
    }
    else
        sum=sum+i;
}
System.out.println(sum);
    }
}
