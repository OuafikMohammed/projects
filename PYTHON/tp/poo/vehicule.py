class Vehicule :
    couleur = "bleu" #attribut de classe
    def __init__(self ,  max_speed  , kms  , nombreplaces =50):
        self.max_speed = max_speed
        self.kilometrage = kms
        self.nombreplaces = nombreplaces
    def nbPlaces(self):
        return self.nombreplaces
    def __eq__(self, other) :
        return self.max_speed == other.max_speed and self.kilometrage == other.kilometrage and self.nombreplaces == other.nombreplaces
    def __ne__(self, other) :
        return not self.__eq__(other)
    def __gt__(self, other) :
        return self.nbPlaces() > other.nbPlaces()
    def __lt__(self, other):
        return self.nbPlaces() < other.nbPlaces()

class Bus (Vehicule):
    def __init__(self, max_speed, kms):
        super().__init__(max_speed, kms)
        super().nbPlaces()

v1 = Vehicule("300 km/h", "50 000 km", 5)
v2 = Vehicule("300 km/h", "50 000 km", 5)
v3 = Vehicule("275 km/h", "50 000 km", 4)
print( v1 == v2) ## TRUE
print( v1 != v2) ## FALSE
print( v1 > v3 ) ## TRUE
print (v1 < v3)  ## FALSE
