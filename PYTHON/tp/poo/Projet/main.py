from modules.gestion_produits import Produit
from modules.gestion_commandes import Commande
from modules.gestion_clients import Client
from modules.gestion_employes import Employe
from modules.gestion_pandas import *



# Instanciation d'un produit
produit1 = Produit("P001", "Shampooing", 10.99, 100)
print(produit1)

# Instanciation d'une commande
commande1 = Commande("C001", "ClientA", [produit1])
print(commande1)

# Instanciation d'un client
client1 = Client("C001", "ClientA", "123 Rue A, VilleA")
print(client1)

# Instanciation d'un employé


employe1 = Employe("E001", "EmployeA", "NomA", 2000, 0.23)
print(employe1)
print('------------------------------')
# Lecture d'un fichier CSV
# dataframe est un tableau de données
dataframe = lire_csv('produits.csv')
print(dataframe)

# Écriture dans un fichier CSV
donnees = [{'Code': 'P001', 'Nom': 'Shampooing', 'Prix': 10.99, 'Stock': 100},
           {'Code': 'P002', 'Nom': 'Gel Douche', 'Prix': 8.50, 'Stock': 150},
           {'Code': 'P003', 'Nom': 'Savon', 'Prix': 5.25, 'Stock': 200},
           {'Code': 'P004', 'Nom': 'Dentifrice', 'Prix': 4.99, 'Stock': 120},
           {'Code': 'P005', 'Nom': 'Brosse à dents', 'Prix': 2.75, 'Stock': 250}]

df = pd.DataFrame(donnees)
ecrire_csv(df, 'produits.csv')
dataframeafter = lire_csv('produits.csv')
print("------------------")
print(dataframeafter)
# Ajout / Suppression d'une colonne
donneesx = {
    'Produit': ['Shampooing', 'Gel Douche', 'Crème Solaire'],
    'Prix': [10.99, 5.99, 15.99],
    'Stock': [100, 150, 50],
    'Categorie': ['Soin', 'Hygiene', 'Protection']
}

# Création du DataFrame
df = pd.DataFrame(donneesx)
print("DataFrame original:")
print(df)

# Ajout d'une colonne calculée 'ValeurTotale'
df['ValeurTotale'] = df['Prix'] * df['Stock']
print("\nDataFrame après ajout de la colonne 'ValeurTotale':")
print(df)

# Suppression de la colonne 'Categorie'
df = df.drop(columns=['Categorie'])
print("\nDataFrame après suppression de la colonne 'Categorie':")
print(df)
