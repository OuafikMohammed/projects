class Stagiare:
    def __init__(self , m , nom , age):
        self.__matricule = m
        self.nom = nom
        self.age = age
    
    def get_matricule(self):
        return self.__matricule
    
s1 = Stagiare(100 , 'Ouafik' , "Mohammed")
print(s1)

## Passage par valeur 
def increment(val):
    val +=1 
a = 8
increment(a)
print(a)
## Passage par reference
def ajouter_item(l):
    l.append(5)
mylist = [2 , 3 , 4]
ajouter_item(mylist)
print(mylist)
