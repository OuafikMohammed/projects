class Somme:
    def __init__(self, n1, n2):
        self.n1 = n1
        self.n2 = n2

    def som(self):
        return self.n1 + self.n2


n1 = int(input("Entrez le premier entier : "))
n2 = int(input("Entrez le deuxieme entier : "))


somme_obj = Somme(n1, n2)


print("La somme de", n1, "et", n2, "est :", somme_obj.som())