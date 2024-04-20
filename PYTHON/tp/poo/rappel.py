class Compte:
    def __init__(self, nom,prenom,num_compte,solde_initial=0):
        self.nom=str(input("saisir votre nom :"))
        self.prenom= str(input("saisir votre prenom :"))
        self.num_compte= int(input("saisir votre numéro de compte bancaire :"))
        self.__solde = solde_initial

    def getBalance(self):
        return self.__solde

    def deposer(self, montant):
        self.__solde += montant

    def retirer(self, montant):
        if montant <= self.__solde:
            self.__solde -= montant
        else:
            print("Fonds insuffisants")

    def ajouter_Interet(self, taux_interet):
        self.__solde *= (1 + taux_interet)

    def __str__(self):
        return "Prenom : " + self.prenom  + "Nom : " + self.nom +  " numéro de compte :" + str(self.num_compte) + " SOLDE INITIALE :" + str(self.__solde)  

mon_compte = Compte(" "," ",0,100)
print("Solde actuel:", mon_compte.getBalance())

mon_compte.deposer(50)
print("Solde après dépôt:", mon_compte.getBalance())

mon_compte.retirer(30)
print("Solde après retrait:", mon_compte.getBalance())

mon_compte.ajouter_Interet(0.05)
print("Solde après ajout d'intérêt:", mon_compte.getBalance())


print(mon_compte)