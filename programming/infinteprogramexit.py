# while 1:

#     print("Enter 1 to print A")
#     print("Enter 1 to print B")
#     print("Enter 1 to print C")
#     print("Enter 1 to print D")
#     print("Enter to exit")

#     UserInput=int(input("enter your choice"))

#     if UserInput==1:
#         print("A")
#     elif UserInput==2:
#         print("B")
#     elif UserInput==3:
#         print("C")
#     elif UserInput==4:
#         print("D")
#     elif UserInput==0:       # exit program use this
        
#         break
        
#     else:
#         print("please enter correct number")



                  # How to clear  screen

import os

while 1:
    os.system('cls')
    print("Enter 1 to print A")
    print("Enter 1 to print B")
    print("Enter 1 to print C")
    print("Enter 1 to print D")
    print("Enter to exit")

    UserInput=int(input("enter your choice: "))

    if UserInput==1:
        print("A")
    elif UserInput==2:
        print("B")
    elif UserInput==3:
        print("C")
    elif UserInput==4:
        print("D")
    elif UserInput==0:      
        
        break
        
    else:
        print("wrong choice")

    input("please enter to continue")