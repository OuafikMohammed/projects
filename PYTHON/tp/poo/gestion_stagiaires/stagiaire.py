class stagiaire :
    def __init__(self , matricule , nom , prenom , datenaissance , cin  , nombresheuresabsence , nombreavertissements):
        self.matricule = matricule
        self.nom = nom
        self.prenom = prenom 
        self.datenaissance = datenaissance
        self.cin = cin
        self.nombresheuresabsence = nombresheuresabsence
        self.nombreavertissements = nombreavertissements
class Employe(stagiaire):
    def __init__(self, matricule, nom, prenom, datenaissance, datehembauche, salaire,heuresupplementaire ):
        super().__init__(matricule, nom, prenom, datenaissance)
        self.dateheumbauche = datehembauche
        self.salaire = salaire 
        self.heuresupplementaire = heuresupplementaire
