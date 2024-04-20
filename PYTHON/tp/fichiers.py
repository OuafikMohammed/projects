import os
#f = open("text.txt","r")
#print(f.read(4))

fichier = open("text.txt" , "a")
fichier.write("iwiwiwiwiwiwiwiw")
fichier.close()

fichier = open("text.txt", "r")
print(fichier.read())
fichier.close()
os.remove("test.txt")