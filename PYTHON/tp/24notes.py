notes=[]
notessup=[]

s = 0

for i in range (1,25,1):
    note=float(input("saisir votre notes"))
    s += note
    notes.append(note)

moyenne = s/len(notes)

