#1
# n = int(input().strip())
# if n % 2 == 1:
#     print("Weird")
# elif (n % 2 == 0) and (n >= 2 and n <= 5):
#     print("Not Weird")
# elif (n % 2 == 0) and (n >= 6 and n <= 20):
#     print("Weird")
# elif (n % 2 == 0) and (n > 20):
#     print("Not Weird")


#2
# a = int(input())
# b = int(input())
# sum = a + b
# dif = a - b
# pro = a * b
# print(sum)
# print(dif)
# print(pro)


#3
# a = int(input())
# b = int(input())
# print(a//b)
# print(a/b)


#Meduim tasks
#4
# def minion_game(s):
#     kev = 0
#     stu = 0
#     for i in range(len(s)):
#         temp = ""
#         if s[i] in vowels:
#             for j in range(len(s)):
#                 if temp in
#         else:


    
#     return v

    

# s = input()
# vowels = "AEIOU"

# print(minion_game(s))

#5
# def is_leap(year):
#     leap = False
#     if(year % 4 == 0) and (year % 100 != 0) or (year % 400 == 0):
#         leap = True

#     return leap
# year = int(input())
# print(is_leap(year))

#6
# import math
# ab = int(input())
# bc = int(input())
# o = math.atan(ab/bc)
# ans = round(math.degrees(o))
# print(f'{ans}{chr(176)}')

#7
n = int(input())
for i in range(1, n + 1):
    print(pow((10**i)//9, 2))