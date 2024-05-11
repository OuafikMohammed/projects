class Car :
    #constructeur par defaut
    def __init__(self) :
        self.__modele = "Mercedes-Benz E63s AMG Edition ONE"
    #getters and setters
    #methode pour obtenir la valeur de l'attribut privé
    def get_modele(self):
        return self.__modele
    #methode pour redefinir la valeur de l'attribut
    def set_modele(self,value):
        self.__modele = value
        return self.__modele
    #methode pour supprimer l'attribut
    #property
    def del_modele(self):
        del self.__modele
        print(self.__modele)
    modele = property(get_modele , set_modele , del_modele , "Make property" )
    #decorators
    @property
    def modele(self):
        return self.__modele
    @modele.setter
    def modele(self,value):
        self.__modele =value
        return self.__modele
    @modele.deleter
    def modele(self):
        del self.__modele
##creation d'objet a partir de la classe
car = Car()
car_prop = Car()
## on prend les donnees de l'object et non pas la classe
print("Getters and setters method:")
print(car.get_modele())  # get
car.set_modele("Honda")  # set
print(car.get_modele())  # get

##
print("Property method:")
print(car_prop.modele)
car_prop.modele = "Chevrolet"
print(car_prop.modele)

print(car.modele)
car.modele = "Mustang"