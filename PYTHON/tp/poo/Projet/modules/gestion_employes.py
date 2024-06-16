class Employe:
    nombreEmployes = 0

    def __init__(self, id_employe, nom, prenom, salaire, tauxCS):
        Employe.nombreEmployes += 1
        self.__id_employe = id_employe
        self.nom = nom
        self.prenom = prenom
        self.__salaire = salaire
        self.tauxCS = tauxCS

    def __str__(self):
        return f"ID: {self.__id_employe}, Nom: {self.nom}, Prénom: {self.prenom}, Salaire: {self.__salaire}, TauxCS: {self.tauxCS}"

    def calculer_salaire_net(self):
        return self.__salaire - (self.__salaire * self.tauxCS)

    def get_id_employe(self):
        return self.__id_employe

    def set_id_employe(self, id_employe):
        self.__id_employe = id_employe

    @classmethod
    def afficher_nombre_employes(cls):
        print("Nombre total d'employés:", cls.nombreEmployes)

    @staticmethod
    def comparer_salaire(e1, e2):
        return e1.__salaire - e2.__salaire

class Manager(Employe):
    def __init__(self, id_employe, nom, prenom, salaire, tauxCS, equipe=None):
        super().__init__(id_employe, nom, prenom, salaire, tauxCS)
        self.equipe = equipe if equipe is not None else []

    def ajouter_employe(self, employe):
        self.equipe.append(employe)

    def __str__(self):
        equipe_str =[str(e.get_id_employe()) for e in self.equipe]
        return super().__str__() + f", Équipe: {equipe_str}"

manager = Manager(1 , "x" , "y" , 5000 , 0.15 , None)
print(manager)