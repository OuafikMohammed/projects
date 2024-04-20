class Salarie :
    #constructeur d'initialisation( parametre )contient des paramatres 
    # constructeur par defaut cotient que self
    def __init__(self , matricule = 0 , nom ="" , prenom = "" ,salaire = float, tauxCS = float) :
        self.__matricule = matricule
        self.nom = nom
        self.prenom = prenom
        self.__salaire = salaire
        self.tauxCS = tauxCS
        #__str__ pour afficher les champs
        # can only concatenate str (not "int") => transform all parametres to str
    def __str__(self):
        return " Matricule : " + str(self.__matricule) + " nom : " + self.nom + " prenom : " + self.prenom + " salaire :" + str(self.__salaire) + " tcs :" + str(self.tauxCS)
    def calculerSalaireNet(self):
        return self.salaire - (self.salaire*self.tauxCS)
## creation de deux instances de type Salarie   ##
s1 = Salarie(199 , "Ouafik" , "Mohammed" , 5999.99 , 0.2)
s2 = Salarie(200 , "Mahfoud " , "Anas" , 4999.00 , 0.9)
print(s1)
print(s2)
## CALCUL DE SALAIRE NET ##
print("Le salaire Net de ", s1.nom ,"est :"  , s1.calculerSalaireNet())
print("Le salaire Net de ", s2.nom ,"est :"  , s2.calculerSalaireNet())
