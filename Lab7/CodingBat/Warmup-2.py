#1
def string_times(str, n):
    return str*n


#2
def front_times(str, n):
  if len(str) < 3:
    return str*n
  else:
    return str[:3]*n
