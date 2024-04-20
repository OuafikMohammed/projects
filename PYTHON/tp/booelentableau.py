T =[10 , 2 , 17 , 23]
i = 0
test = True
while i < 3 and test :
    if T[i] > T[i+1]:
        test = False
    i = i + 1
    

if test == True :
    print("tableau ordonée")
if test == False :
    print("tableau non-ordonée")