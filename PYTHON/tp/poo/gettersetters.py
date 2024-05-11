class Voitures :
    def __init__(self , matricule = 1011 ) :
        self._matricule = matricule
    def get_matricule(self):
        return self._matricule

voitures = Voitures()
# print(voitures.get_matricule())
# class Geek: 
#     def __init__(self, age = 18): 
#          self._age = age 
      
#     # getter method 
#     def get_age(self): 
#         return self._age 
      
#     # # setter method 
#     # def set_age(self, x): 
#     #     self._age = x 
  
# raj = Geek() 
  
# # # setting the age using setter 
# # raj.set_age(21) 
  
# # retrieving age using getter 
# print(raj.get_age()) 

import afficher
print(afficher.afficher(cours="POO"))

