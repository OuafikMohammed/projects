class Etudiant:
    def __init__(self, nom, note1, note2):
        self.nom = nom
        self.note1 = note1
        self.note2 = note2

    def calc_moy(self):
        return (self.note1 + self.note2) / 2

    def afficher(self):
        print("Nom de l'étudiant :", self.nom)
        print("Note moyenne :", self.calc_moy())


nom_etudiant = input("Entrez le nom de l'étudiant : ")
note1_etudiant = float(input("Entrez la première note de l'étudiant : "))
note2_etudiant = float(input("Entrez la deuxième note de l'étudiant : "))

etudiant = Etudiant(nom_etudiant, note1_etudiant, note2_etudiant)

etudiant.afficher()
