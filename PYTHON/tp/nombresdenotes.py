def saisir_nombres_etudiants():    
    return int(input("Saisir le nombre de notes:"))
saisir_nombres_etudiants

def notes(nombres_etudiants):
    notes=[]
    for i in range (int(nombres_etudiants)):
        note=float(input(f"saisir la note de l étudiant {i+1}: "))
    notes.append(note)
    return notes
notes
def moyennedesnotes(nombres_etudiants):
    notes=notes(nombres_etudiants)
    somme = 0
    for i in range (int(nombres_etudiants)):
        somme += notes[i]
    moyenne = somme/ len (notes)
    return moyenne

moyennedesnotes
nombres_etudiants=saisir_nombres_etudiants()
notes_etudiants=notes(nombres_etudiants)
moyenne_des_notes=moyennedesnotes(nombres_etudiants)
print(f"La moyenne des notes est de : {moyenne_des_notes}")
