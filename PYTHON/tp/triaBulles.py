T=[15 , 11 , 18 , 13 , 12]

permutation = True
while permutation== True :
    permutation = False
    for i in range (0,(len(T)-1)):
        if T[i] > T[i+1]:
            x = T[i]
            T[i] = T[i+1]
            T[i+1] = x
            permutation = True

print(T)