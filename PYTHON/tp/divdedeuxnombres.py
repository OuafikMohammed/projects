x = float(input("saisissez un nombre:"))
y = float(input("saisissez un nombre:"))


def div(a,b):
    if a % b == 0:
     return a ,"est divisible par:",b
    else:
     return a ,"n'est pas divisible par:",b
    
print(div(x,y))