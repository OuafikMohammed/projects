somme = 0
count = 0

for value in [9 ,41 ,12 ,3 ,74 ,15]:
    count = count + 1
    somme = somme + value
    print( count, value, somme )

print("the average is :",somme/count )