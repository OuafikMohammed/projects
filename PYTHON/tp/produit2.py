m=float(input("saisir un nombre :"))
n=float(input("saisir un nombre :"))

if m != 0 or n != 0:
    print("le produit de", m ,"et",n,"est nul")
if m * n < 0:
    print("le produit de",m ,"et",n,"est négatif")
if m * n > 0:
    print("le produit de",m ,"et",n,"est positif")