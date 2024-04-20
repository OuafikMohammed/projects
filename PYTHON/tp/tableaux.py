notes=[1,5,6,9,8,15]
tpaires=[]
timpaires=[]
nombres=[5,17,12,17,11,14]
def pair_impair():
    for i in range (0 , len(notes)):
        if notes[i] % 2 == 0 :
            tpaires.append(notes[i])
        else :
            timpaires.append(notes[i])



def tri_erray (t_notes):
    # t_notes est un parametre on lr replace aprés par notes qui est une liste déja existante #
    for i in range (0 , len(notes)):
        iMin = i
        for k in  range (i+1 , len(notes)):
            if t_notes[iMin] >  t_notes[k]:
                iMin = k
        ## to find the minimun to chnge it with i##
        nc = t_notes[iMin]
        t_notes[iMin] = t_notes[i]
        t_notes[i] = nc
    return t_notes
#remplissage du tableau#
notes= tri_erray(notes)

for i in range (0 , len(notes)):
    if notes[i] % 2 == 0 :
        tpaires.append(notes[i])
    else :
        timpaires.append(notes[i])

print(notes)
print(tpaires)
print(timpaires)