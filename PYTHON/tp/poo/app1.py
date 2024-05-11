class Etudiant :
    def __init__(self,nm , pm,age,note,fre) -> None:
        ## le nom des attributs est toujours a cote de self
        self.__nom = nm
        self.prenom = pm
        self.age = age
        self.note = note
        self.filiere = fre
    def getNom(self):
        return self.__nom
#creation d'objet
etd1 = Etudiant("Ouafik","Mohammed",18,15,"DD")
##print(etd1.__nom)##ce code ne marche pas car "__nom" est considere comme un attribut public nomme "__nom" ce qui est impossible
## donc on doit creer une methode getX pour avoir le X exmeple:methode getNom pour avoir l'attribut
print(etd1.getNom())