#polymorhysme = plusieurs formes
class Animal:
    def parler(self):
        pass

class Chien(Animal):
    def parler(self):
        return "Woof!"

class Chat(Animal):
    def parler(self):
        return "Meow!"

# Fonction polymorphique
def faire_parler(animal):
    print(animal.parler())

# Utilisation
mon_chien = Chien()
mon_chat = Chat()

faire_parler(mon_chien)  # Output: Woof!
faire_parler(mon_chat)   # Output: Meow!
