# marks = [1,2,34,23,12,15]

# for i in marks:
#     if(i % 5 == 0):
#         break
#     print(i)


# check loop break or complete
marks = [1,2,34,23,12,15]
isBreakCalled=0
for i in  marks:
    if(i%5==0):
        isBreakCalled=1
        break
    print(i)

if isBreakCalled ==0:
    print("loop is breaked")
else:
    print("loop is completed")    

