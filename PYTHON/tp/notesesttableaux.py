notes=[10,14,13.5,8,18]

for k in range (0,4,1):
    iMin=k
    for i in range (k+1,5,1):
        if notes[iMin]>notes[i] :
          iMin = i
    nc = notes[iMin]
    notes[iMin] = notes[k]
    notes[k] = nc
print (notes)
