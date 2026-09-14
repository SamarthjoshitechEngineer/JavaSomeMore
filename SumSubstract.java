  import java.util.Scanner;
public class SumSubstract {
    public static void main(String[]args){
Scanner sc=new Scanner(System.in);
System.out.println("Enter a number");
int a=sc.nextInt();
System.out.println("Enter upto What Number");
int n=sc.nextInt();
int currentterm=0,sum=0;
for(int i=1;i<=n;i++){
    int count=0;
     currentterm=currentterm*10+a;
     int temp=currentterm;
     while(temp!=0){
        temp/=10;
        count++;
     }
     if(count%2==0)
     sum-=currentterm;
    else{
        sum+=currentterm;
    }
}
System.out.println(sum);
    }
}
