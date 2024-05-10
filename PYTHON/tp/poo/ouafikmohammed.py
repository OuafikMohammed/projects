import datetime

# Q1
class Artist:
    #Q5
    Pays = 'USA'
    liste_Artiste = []

    def init(self,nom:str,age:int,actif:bool,adresse:str,anned:int,domaine:str,realisations:list):
        self.nom = nom
        self._age = age
        self.anned = anned
        self.domaine = domaine
        self.realisations = []
        self.realisations.append(realisations)
        self._adresse = adresse
        self.actif = actif
        
        Artist.liste_Artiste.append(self)

    #Q3
    def get_age(self):
        return self._age

    def set_age(self,nage):
        self._age = nage

    def get_adress(self):
        return self._adresse

    def set_adress(self,nadresse):
        self._adresse = nadresse

    #Q4
    Adresse = property(get_adress,set_adress)

    #Q6
    def ajouter_realisation(self,realisation):
         self.realisations.append(realisation)


    #Q7
    def Anciennete(self):
        return self.anned - self._age

    #Q8

    @classmethod
    def modifier_pays(cls,pay):
        cls.Pays = pay
        return cls.Pays

    #Q9
    def str(self):
        return f"Nom: {self.nom} Age: {self._age} Actif: {self.actif} Adresse:{self._adresse} Dommaine: {self.domaine} Realisation: {self.realisations}"

    
    
#Q2
Artiste1 = Artist('Denzel Washington', 69,False,'California',1980,'Cinema','Training Day')
Artiste2 = Artist('Cindy sherman', 70,False,'Texas',2004,'Photography','Film Stills')


#Q13
class Musicien(Artist):

    def init(self, nom: str, age: int, actif: bool, adresse: str, anned: int, domaine: str, realisations: list,instrument: list, nb_concert: int):
        super().init(nom, age, actif, adresse, anned, domaine, realisations)
        self.instrument = []
        self.instrument.append(instrument)
        self.nb_concert = nb_concert


#Q14
    def str(self):
        return super().str() + f"\n-Instruments: {self.instrument}\n -Nombre de Concert: {self.nb_concert}"
    #INCREMENTATION
    def addConcert(self):
        self.nb_concert+=1