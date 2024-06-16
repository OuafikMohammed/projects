class Salarie:
    tauxCs = 0.23
    nombreSalarie = 0
    def __init__(self,matricule = 0,nom = "",prenom = "",salaire = float(0)):
        Salarie.nombreSalarie += 1
        self.__matricule = matricule
        self.nom = nom
        self.prenom = prenom
        self.salaire = salaire
    def __str__(self):
        return f"Nom et Prenom {self.nom} - {self.prenom} Salaire de Base : {self.salaire}"
    def calculerSalaireNet(self):
        salaireNet = self.salaire - (self.salaire * self.tauxCs)
        return salaireNet
    
    @property
    def matricule(self):
        return self.__matricule
    
    @matricule.setter
    def matricule(self, m):
        self.__matricule = m
    
    @matricule.deleter
    def matricule(self):
        del self.__matricule
    

    # methode de supression :
    def __del__(self):
        Salarie.nombreSalarie -= 1
        print(f"L object {self.nom} a ete supprime, nombre de salarie est :\n{Salarie.nombreSalarie}")
    
    #method de class :
    @classmethod
    def afficheNombreSalarie(cls):
        print(f"Nombre de Salarie est :\n{cls.nombreSalarie}")

    # method prive :
    def __calculerSalaireNet(self):
        return self.salaire - (self.salaire * Salarie.tauxCs)
    
    #method pour afficher la method prive :
    def affiche_salaire_net(self):
        print(f"salaire net de {self.nom} est :\n{self.__calculerSalaireNet()}")

    # method static :
    @staticmethod
    def comparer_salaires(objectA, objectB):
        if objectA.salaire > objectB.salaire :
            print(f"salaire de {objectA.nom} > salaire de {objectB.nom}")
        elif objectA.salaire < objectB.salaire:
            print(f"salaire de {objectA.nom} < salaire de {objectB.nom}")
        else:
            print(f"salaire de {objectA.nom} = salaire de {objectB.nom}")

## Heritage :
class Manager(Salarie):
    def __init__(self, matricule=0, nom="", prenom="", salaire=float(0),equipe = None):
        super().__init__(matricule, nom, prenom, salaire)
        if equipe == None:
            equipe = []
        self.equipe = equipe
    
    def afficheManager(self):
        return super().__str__() + " " + self.equipe

    def ajout_salarie(self, salarie):
        self.equipe.append(salarie)

class ChefProjet:
    def __init__(self,projet):
        self.projet = projet

# Heritage de deux Classes :
class Gestionnaire(Salarie,ChefProjet):
    def __init__(self, matricule=0, nom="", salaire=float(0),projet = ""):
        super().__init__(matricule, nom, salaire)
        ChefProjet.__init__(self,projet)

if __name__ == '__main__':
    firstSalarie = Salarie(56898,'MARZOUG','KHALID',7000.51) #firsSalaire est de type Salarie()
    secondSalarie = Salarie(56899,'SIDQUI','ZAKARIA',9000.7)

    # Afiche normal :
    print("Affiche normal :\n",firstSalarie)

    # attribut global :
    Salarie.departement = "IT"
    print("apres l ajout d attribut global 'departement' :\n",firstSalarie.departement,"\n",secondSalarie.departement)

    # incremente nombre Salarie :
    print("nombre Salarie est :\n",Salarie.nombreSalarie)

    # Decremente nombre Salarie :
    #del secondSalarie
    
    # method de classe pour affiche nombre de classe :
    Salarie.afficheNombreSalarie()

    #comment l accede a une  methode prive :
    firstSalarie.affiche_salaire_net()

    # L appel d une methode Static :
    Salarie.comparer_salaires(firstSalarie,secondSalarie)


    # instance des classes filles :
    managerA = Manager(1,"LEGDANI","AMINE",12000)
    managerB = Manager(2,"ONZY","MERIEM",11000)

    managerA.ajout_salarie(firstSalarie)
    managerB.ajout_salarie(secondSalarie)

    print(managerA.equipe)

    # verifier l incrementation de nombre de salaries :
    Salarie.afficheNombreSalarie()

    # proprety :
    print(firstSalarie.matricule)

    # question 19 : Heritage :
    gestionnaire1 = Gestionnaire(1234,"QACEM",97000,"HR_Access")
    print(gestionnaire1.nom)
    print(gestionnaire1.projet)
    
    print(str(Salarie))