class Stagiaire :
    def __init__(self , nom = "" , prenom = "" ,  age = int , cin = "") -> None:
        self.nom = nom
        self.prenom = prenom 
        self.age = age 
        self.cin = cin
    # SURCHAGE DES OPERATEURS
    def __eq__(self, value) :
        return self.age == value.age and self.age == value.age

s1 = Stagiaire("Ouafik" , "Mohammed" , 18 , "N0000")
s2 = Stagiaire("Ouafik" , "Mohammed" , 18 , "N0000")
print(s1 != s2)# false