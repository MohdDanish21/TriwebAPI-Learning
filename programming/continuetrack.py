# i=0

# while i<=10:
#     if i%2==0:
#         continue
#     print(i)
#     i=i+1    # here loop run infinitely



# i=0
# while i<=10:
#     if i%2==0:
#         i=i+1
#         continue
#     print(i)
#     i=i+1  



# how many times it will count numbers

i=0
count=0
while i<10:
    if i%2==0:
        i=i+1
        count = count+1
        continue
    print(i)
    i=i+1  
print("in loop it called continue ->",count,"number of times")