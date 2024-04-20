# import csv
# f = open("file.csv" , "r")
# #print(f.read())
# #f.close()
# #lecteurCSV = csv.reader(f,delimiter=';')
# # for ligne in lecteurCSV :
# # print(ligne)

# #les dictionnaires
# lecteur = csv.reader(f,delimiter=';')
# for ligne in lecteur :
#     print(ligne)

# f.close()















import csv
file = open("file.csv", "r")
lecteurcsv = csv.reader(file , delimiter=";")
for ligne in lecteurcsv :
    print(ligne)
file.close()