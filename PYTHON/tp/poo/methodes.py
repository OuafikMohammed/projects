class Stagiare:
    def __init__(self , m , nom , age):
        self.__matricule = m
        self.nom = nom
        self.age = age
    
    def get_matricule(self):
        return self.__matricule
    
s1 = Stagiare(100 , 'Ouafik' , "Mohammed")
print(s1)