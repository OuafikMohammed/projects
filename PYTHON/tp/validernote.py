note=float(input("écrire un nombre :"))
while note < 0 or note > 20:
    print("La Note doit etre entre 0 et 20.Réesayer")
    note=float(input("écrire un nombre :"))
   
if note >= 10 and note <= 20:
     print("validé")
elif note < 10 and note >=  0:
     print("non-validé")
