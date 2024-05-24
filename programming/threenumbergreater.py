print("enter first number")
n1 = int(input())

print("enter second number")
n2 = int(input())

print("enter third number")
n3 = int(input())

if n1>n2:
    if n1>n3:
        print("n1 is greatest")
    else:
        print("n3 is greatest")
else:
    if n2>n3:
        print("n2 is greatest")
    else:
        print("n3 is greatest")
