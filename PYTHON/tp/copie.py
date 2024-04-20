nbcopie=int(input("écrire le nombres de copies :"))

if nbcopie<=10:
    prix=2*nbcopie
if nbcopie>=20 and nbcopie<30:
    prix=1.50*nbcopie
if nbcopie>=30 :
    prix=1*nbcopie
print("Le prix est ",prix,"DH")