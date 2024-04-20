T1 = [0, 10, 15 , 18, 31]
x = 12
i = 0

while x > T1[i] :
    i = i + 1
T1.append(x)

for k in range (len(T1)-1 , i ,-1 ):
    T1[k] = T1[k-1]

T1[i] = x
print(T1)
