from datetime import datetime

class Commande:
    def __init__(self, numero, client, produits, date=datetime.now()):
        self.numero = numero
        self.client = client
        self.produits = produits
        self.date = date

    def __str__(self):
        return f"Commande No: {self.numero}, Client: {self.client}, Date: {self.date}, Produits: {[str(p) for p in self.produits]}"

    def ajouter_produit(self, produit):
        self.produits.append(produit)

    def calculer_total(self):
        return sum([p.prix for p in self.produits])
