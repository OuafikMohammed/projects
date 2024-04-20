# thislist1= ["apple","banana","cherry","orange","kiwi","melon","mango"] 
# print(thislist1[2:5])
# thislist= ["apple", "banana", "cherry"]
# for x in thislist: #parcourir des éléments de la liste
#     print(x) 
# thislist= ["apple", "banana", "cherry"]
# if "apple" in thislist: #vérifier si une chaine est un élément de la liste
#     print("Yes, 'apple' is in the fruits list")

# thislist= ["apple", "banana", "cherry"]
# print(len(thislist)) # afficher la longueur d’une liste
# thislist= ["apple", "banana", "cherry"]
# del(thislist[0]) #supprimer l’élément se trouvant à la première position
# print(thislist) # affiche ["banana", "cherry"]
# thisset= {"apple", "banana", "cherry"}
# thisset.pop() #afficher "cherry " c’est l’élément supprimé
# print(thisset) #affiche {"apple", "banana"}
# thisset= {"apple", "banana", "cherry"}
# thisset.clear() #vider le set
# print(thisset) #affiche set()
# set1 = {"a", "b" , "c"}
# set2 = {1, 2, 3}
# set3 = set1.union(set2) #fusionner set1 et set2
# print(set3) # affiche {1, 2, 3, 'c', 'b', 'a'}
thisdict={"brand":"Ford","model":"Mustang","year":1964} #déclaration du dictionnaire thisdict
x = thisdict.get("model") #retourner la valeur de la clé model
print(x) #afficher Mustang
