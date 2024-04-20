####TRI PAR INSERTION#####
T = [11,9,10,7,19]
for i in range (1,len(T)):
    #######On comence par la deuxieme valeur####
    temp = T[i]
    k = i - 1
    while k >= 0 and T[k] > temp :
            T[k+1] = T[k]
            k = k - 1
    T[k+1] = temp
        
print(T)
