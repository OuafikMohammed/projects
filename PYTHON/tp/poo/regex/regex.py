from abc import ABC, abstractmethod

class Produit(ABC):
    def __init__(self, nom, code):
        self.__nom = nom
        self.__code = code

    @property
    def nom(self):
        return self.__nom

    @property
    def code(self):
        return self.__code

    @abstractmethod
    def getPrixHT(self):
        pass

class Composition:
    def __init__(self, produit, quantite):
        self.__produit = produit
        self.__quantite = quantite

    @property
    def produit(self):
        return self.__produit

    @produit.setter
    def produit(self, produit):
        self.__produit = produit

    @property
    def quantite(self):
        return self.__quantite

    @quantite.setter
    def quantite(self, quantite):
        self.__quantite= quantite
