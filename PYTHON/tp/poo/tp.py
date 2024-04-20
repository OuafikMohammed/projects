import datetime
from datetime import date
class Employe:

    def _init_(self, matricule, nom , prenom, dateNaissance , dateEmbauche, salaire):
        self.matricule = matricule
        self.nom = nom
        self.prenom = prenom
        self.dateNaissance = dateNaissance
        self.dateEmbauche = dateEmbauche
        self.salaire = salaire

    def age(self):
        date = datetime.datetime.now()
        anne = date.year
        annedateNaissance = int(self.dateNaissance[0:4])
        self.age = anne - annedateNaissance
        print(f"L'age de {self.nom} {self.prenom} est: {self.age} ans")

    def anciennite(self):
        date = datetime.datetime.now()
        anne = date.year
        anneEmbauche = int(self.dateEmbauche[0:4])
        self.anciennit = anne - anneEmbauche
        print(f"{self.nom} {self.prenom} travaille ici depuis : {self.anciennit} ans")

    def augmentionDeSalaire(self):
        ajout = 0
        if self.anciennit < 5:
            ajout = 2
        elif self.anciennit < 10 :
            ajout = 5
        else :
            ajout = 10
        self.salaire = self.salaire + (self.salaire * (ajout / 100))

    def afficherEmploye(self):
        print(f"Votre information:\n\n- matricule: {self.matricule}\n- nom: {self.nom}\n- prenom: {self.prenom}\n- Date de Naissance: {self.dateNaissance}\n- Date d' embauche: {self.dateEmbauche}\n- Salaire: {self.salaire}£")

    def __str__(self) -> str:
        pass

em1 = Employe(1, "Anass", "Mahfoud", "2004-05-20", "2018-06-20", 5000)

em1.afficherEmploye()
em1.anciennite()
em1.augmentionDeSalaire()
em1.age()
em1.afficherEmploye()

