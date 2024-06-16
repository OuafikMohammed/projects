import pandas as pd

def lire_csv(nom_fichier):
    return pd.read_csv(nom_fichier)

def ecrire_csv(df, nom_fichier):
    df.to_csv(nom_fichier, index=False)

def ajouter_colonne(df, nom_colonne, valeurs):
    
    try:
        df[nom_colonne] = valeurs
        return df
    except Exception as e:
        print(f"Erreur lors de l'ajout de la colonne: {e}")
        return None

def supprimer_colonne(df, nom_colonne):
    
    try:
        df = df.drop(columns=[nom_colonne])
        return df
    except Exception as e:
        print(f"Erreur lors de la suppression de la colonne: {e}")
        return None