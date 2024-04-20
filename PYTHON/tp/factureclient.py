with  open("Factures.txt","a") as Facture :
    nom_client = input("saisissez le nom du client : ")
    code_article = input("Code de l ’ article : ")
    pu = float(input("Prix unitaire : "))
    qte = int(input("Quantité achetée : "))
    Montant = pu*qte
    ########### Dans concaténation on utilise string ##########
    Pour_chaque_client = nom_client + "  " + code_article + "  " + str(pu) + "DHS" + "  " + str(qte) + "  " + str(Montant)+ "DHS"
    Facture.write(Pour_chaque_client)
    Facture = open('Factures.txt', "r")
for line in Facture:
    print(line)
Facture.close()