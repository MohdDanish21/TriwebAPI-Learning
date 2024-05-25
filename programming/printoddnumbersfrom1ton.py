print("program to print odd numbers from 1 to 10")

print("enter any number")
n=int(input())

for i in range(n):
    num=i+1
    if num%2!=0:
        print(num)
