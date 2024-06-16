class Client:
    def __init__(self, id_client, nom, adresse):
        self.id_client = id_client
        self.nom = nom
        self.adresse = adresse

    def __str__(self):
        return f"Client ID: {self.id_client}, Nom: {self.nom}, Adresse: {self.adresse}"