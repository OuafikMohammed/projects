class Personne:
    "Hey i am a human and i will get 20/20 in OOP OF PYTHON LET'S GOOOO !"
    def __init__(self, nom, age):
        self.nom = nom
        self.age = age

    def dire_bonjour(self):
        print(f"Bonjour, je m'appelle {self.nom}.")

    def __dir__(self):
        return ['nom', 'age', 'dire_bonjour', 'pays']
    def __str__(self):
        return f"personne : {self.nom} {self.age} ans"
    

# Création d'une instance de la classe Personne
une_personne = Personne("Alice", 30)

# Utilisation de la méthode dir() pour afficher les attributs  de l'objet une_personne sos
print(une_personne)
print(dir(une_personne))
## dir => dir f une list les attributs
print(une_personne.__doc__)
## doc => documentation
print(une_personne.__dict__)
# dict => dictionnaire
print(str(une_personne))
# str => affichage des attributs en une chaine de carcteres c-a-d phrase

#-----------------------------------------------------------------

import afficher
resultat = afficher.afficher("Python avancée")
print(resultat)
# import => import fichier
#            resultat = fichier.methode("contenu")
#            print(resultat)

#------------------------------------------------------------

print(isinstance(une_personne, Personne))  # True
#print(isinstance(objet, classe))  

# Vérification si les objets sont des instances de différentes classes