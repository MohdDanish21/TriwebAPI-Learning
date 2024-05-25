print("program to print each number its even or odd in series")


print("enter any term")
n= int(input())

for i in range(n):
    num = i +1

    if num%2==0:
        print(num,"even")
    else:
        print(num,"odd")
