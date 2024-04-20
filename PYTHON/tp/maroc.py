a=float(input("écrire un nombre:"))
while a>20:
 input("écrire un nombre:")
if(a<10):
 Mention=("redouble")
elif(a>10 and a<12):
 Mention="passable"
elif (a>12 and a<14):
 Mention="assez-bien"
elif(a>14 and a<16):
 Mention="bien"
elif (a>16):
 Mention="trés-bien"
print("Votre mention est:",Mention)