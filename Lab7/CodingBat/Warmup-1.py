#1
def sleep_in(weekday, vacation):
  if(weekday and (not vacation)):
    return False
  else:
    return True
  
#2
def monkey_trouble(a_smile, b_smile):
  return not(a_smile ^ b_smile)


#3
def sum_double(a, b):
  if a != b:
    return a + b
  else:
    return (a + b)*2
  
#4
def diff21(n):
  if n <= 21:
    return 21 - n
  else:
    return (n - 21) * 2
  

#5
