print("enter the first number")
n1 = int(input())

print("enter the second number")
n2 = int(input())

print("enter the three number")
n3 = int(input())

# print("enter the fourth number")
# n4 = int(input())

#Here i will use AND operator

if n1>n2 and n1>n3:
    print("n1 is greatest")
elif n2>n3:
    print("n2 is greatest")
else:
    print("n3 is greatest")
    
