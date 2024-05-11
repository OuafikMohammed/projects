class Salarie :
    #attribut de classe =  attribut statique
    departement = 'IT'
    nombreSalaries = 0
    #constructeur d'initialisation( parametre )contient des paramatres 
    # constructeur par defaut cotient que self et des valeurs statiques pour chaque attribut nomme attribut de classe
    def __init__(self , matricule = 0 , nom ="" , prenom = "" ,salaire = float, tauxCS = float) :
        Salarie.nombreSalaries += 1
        # attribut d'instance
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
        return self.__salaire - (self.__salaire*self.tauxCS)
    def getmatricule(self):
        return self.__matricule
    def setmatricule(self,m):
        self.__matricule = m
    
    # matricules = property(get__matricule)
    # @property
    # def getmatricule(self):
    #     return self.__matricule
    # def set__matricule(self,m):
    #      self.__matricule = m
    
    ## decrementer le nombre de salaries
    def __del__(self):
        print('Destructor called')
        Salarie.nombreSalaries -= 1
    ## afficher le nombre de salaries (methodes de classe)
    @classmethod 
    def afficher_nombres_salaries(cls):
        print(" Nombre total de salaries" , cls.nombreSalaries)
    ## methodes statique
    @staticmethod
    def comparer_salaires(s1 , s2):
        print(s1 - s2 )
    

## creation de deux instances de type Salarie   ##
s1 = Salarie(199 , "Ouafik" , "Mohammed" , 5000.00 , 25/100)
s2 = Salarie(200 , "Mahfoud " , "Anas" , 10000.00 , 25/100)

print(s1.getmatricule())
s1.setmatricule(10)
print(s1.getmatricule())

print(s1)
print(s2)
## CALCUL DE SALAIRE NET ##
print("Le salaire Net de ", s1.nom ,"est :"  , s1.calculerSalaireNet())
print("Le salaire Net de ", s2.nom ,"est :"  , s2.calculerSalaireNet())
## matricule attribut prv et en lecture seule ##

###Incrementer le nombre de salaries ###
print("Le nombre de  salariés est :", Salarie.nombreSalaries)

## Decrementer le nombre de slariés ###
print(Salarie.nombreSalaries)
del s1
print(Salarie.nombreSalaries)

class essai_class :
    @staticmethod
    def method():
        print(" Méthode statique")
##__name__ est utilise dans le fichier original
if __name__ == '__main__':
    essai_class.method()
## afficher le nombre de salaries
s2.afficher_nombres_salaries()

class Manager(Salarie):
    def __init__(self,matricule: int,nom: str,prenom:str, salaire:float,tauxCs:float,equipe:list):
        super().__init__(matricule,nom,prenom,salaire,tauxCs)
        self.equipe = equipe

    def afficher_manager(self):
        return super() + self.equipe

    def ajout_salarie(self,salarie:object):
        self.equipe.append(salarie)
class Gestionnaire(Manager,Salarie):
    def _init_(self,matricule,nom,prenom,salaire,tauxCs,equipe,projet):
        #chainage des constructeurs
        super()._init_(matricule,nom,prenom,salaire,tauxCs,equipe)
        # Manager._init_(equipe) because the super() took manager not salarie
        self.projet = projet


if __name__ == "_main_":

    sa1 = Salarie(1,"Ouafik","Mohammed", 5000,0.25)
    sa2 = Salarie(2,"Mahfoud","Anass", 10000,0.25)
    sa3 = Salarie(3,"Harchid","Reda", 10000,0.25)

#signature dune fonction = meme nom de parametre et mem type 
    ## redefinition
    ##  surcharge




