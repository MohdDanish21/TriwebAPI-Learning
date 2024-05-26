# print 0 5 10 15 20 25 .....n

# seriesStartFrom=0
# gap=5
# seriesEndAt=int(input("please end of series"))

# i= seriesStartFrom
# while i<=seriesEndAt:
#     print(i)
#     i=i+gap


#2  print 1 4 3 6 5 8 7 
seriesStartFrom=1
gap=1
seriesEndAt=int(input("please end of series"))

i= seriesStartFrom
while i<=seriesEndAt:
    print(i)
    i=i+gap
    if gap ==3:
        gap =gap+1
    else:
        gap=3
