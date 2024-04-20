Notes = [10,14,13,8,17]
print(Notes)
for x in range (0,len(Notes)):
    iMin = x
    for i in range (x+1,len(Notes)):
        if   Notes[iMin] > Notes[i]:
            iMin = i
    nc = Notes[iMin]
    Notes[iMin] = Notes[x]
    Notes[x] = nc
print(Notes)

T= [10,14,13,8,17]
imin = 0
imax = 0
for i in range (1, len(T)):
    if T[imin]>T[i]:
    #min >
        imin = i
    elif T[imax]<T[i]:
    #max <
        imax = i

print("la valeur maximale est:" ,T[imax] ,"d indice", imax)
print("la valeur minimale est:" ,T[imin] ,"d indice", imin)
