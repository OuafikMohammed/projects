import csv

class Produit:
    nombreProduits = 0
    def __init__(self, code, nom, prix, stock):
        Produit.nombreProduits += 1
        self.__code = code
        self.nom = nom
        self.prix = prix
        self.stock = stock

    def __str__(self):
        return f"Code: {self.__code}, Nom: {self.nom}, Prix: {self.prix}, Stock: {self.stock}"

    def get_code(self):
        return self.__code

    def set_code(self, code):
        self.__code = code

    def mise_a_jour_stock(self, quantite):
        self.stock += quantite

    @classmethod
    def afficher_nombre_produits(cls):
        print("Nombre total de produits:", cls.nombreProduits)

    @staticmethod
    def comparer_prix(p1, p2):
        return p1.prix - p2.prix

# p1 = Produit(101, "Shampooing", 12.5, 100)
# p2 = Produit(102, "Gel Douche", 8.0, 200)

# print(p1)
# print(p2)
# Produit.afficher_nombre_produits()
