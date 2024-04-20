#############  LECTURE DU FICHIER ############################

# import csv
# f = open("csvfile.csv" , "r")
# listestagiaire = csv.DictReader(f, delimiter = ";")
# for element in listestagiaire :
# print(element)
# f.close()

############  ECRITURE DANS LE FICHIER  ##########

# import csv
# FICHIER = open("csvfile.csv" , "w")
# écrivainCSV = csv.writer(FICHIER, delimiter = ";")
# écrivainCSV.writerow(["Nom","Prenom","Telephone"])
# écrivainCSV.writerow(["Dubois","julien","018888888"])
# écrivainCSV.writerow(["Ouafik","Mohammed","0777777777"])
# FICHIER.close()

#######################################################################
import csv #importer la bibliotéque csv
f = open("csvfile.csv" , "w")
informations = [{"nom":"ouafik" , "prenom" : "mohammed"},
               {"nom":"haloui" , "prenom" : "adam"},
               {"nom":"taher" , "prenom" : "ilyass"},
               {"nom":"sayadi" , "prenom" : "medamine"},
               {"nom":"ouizzane" , "prenom" : "achraf"},]

ecrivainCSV = csv.DictWriter(f,delimiter=";",fieldnames=informations[0].keys())
ecrivainCSV.writeheader()
for ligne in informations :
    ecrivainCSV.writerow(ligne)
f.close()
#########################################################################
