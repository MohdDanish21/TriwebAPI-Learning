#print all even numbers from 1 to n 

print("enter any number")
n = int(input())

for i in range(n):
    num = i+1
    if num%2==0:
        print(num)