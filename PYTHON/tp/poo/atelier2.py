from abc import ABC , abstractmethod
class ObjetPostal(ABC):
    def __init__(self, nom_destinaire , adresse_destinataire , code_postal):
        self.__nom_destinataire = nom_destinaire
        self.adresse_destinataire = adresse_destinataire
        self.code_postal = code_postal
    ## decorteurs ##
    @property
    def nom_destinataire(self):
        return self.__nom_destinataire
    
    @nom_destinataire.setter
    def nom_destinataire(self , nd):
        self.__nom_destinataire = nd
        return self.__nom_destinataire
        
    @nom_destinataire.deleter
    def nom_destinataire(self):
        del self.__nom_destinataire

    @abstractmethod
    def prix(self):
        pass

    def __str__(self):
        return (
                f"ObjetPostal(nom_destinataire={self.nom_destinataire}, "
                f"adresse_destinataire={self.adresse_destinataire}, "
                f"code_postal={self.code_postal})"
            )
            

class lettre(ObjetPostal):
    def __init__(self, nom_destinaire, adresse_destinataire, code_postal, poids = 0,recommande  =False, urgence = False ):
        super().__init__(nom_destinaire, adresse_destinataire, code_postal )
        self.poids = poids
        self.recommande = recommande
        self.urgence = urgence
    def prix(self):
        prix_base = 5.5
        if self.recommande :
            prix_base += 15
        if self.urgence:
            prix_base += 6
        return prix_base
    def __str__(self):
        base_str = super().__str__()
        return f"  Lettre({base_str} , poids = {self.poids} , prix = {self.prix()}  )"
    def __eq__(self, other):
        if isinstance(other, lettre) and super().__eq__(other):
            return (self.poids == other.poids and self.recommande == other.recommande and self.urgence == other.urgence)
        return False
    
class Colis(ObjetPostal):
    def __init__(self, nom_destinaire, adresse_destinataire, code_postal , poids = 0 , recommande = False):
        super().__init__(nom_destinaire, adresse_destinataire, code_postal)
        self.poids = poids
        self.recommande = recommande
    def prix(self):
        prix_base = self.poids / 100 *8 
        if self.recommande :
            prix_base += 30
        return prix_base
    def __str__(self):
        base_str =  super().__str__()
        return f"Colis({base_str}  , poids = {self.poids} , prix = {self.prix()})"

lettre1 = lettre("Ouafik Med", "Sidi maarouf", "33079", poids=50, recommande=True, urgence=True)
print(lettre1)

colis1 = Colis("Nadir Ait Taleb", "Sbata", "75902", poids=2000, recommande=True)
print(colis1)
