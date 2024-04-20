
t = int(input ( "écrire un temps en secondes :" ))

heures = t //3600
reste = t % 3600
minutes = reste //30  
secondes = reste // 60

print (f"Le temps est : {heures}h,{minutes}min,{secondes}s")