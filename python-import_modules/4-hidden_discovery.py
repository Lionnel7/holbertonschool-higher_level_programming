#!/usr/bin/python3
import sys

def additionner_arguments():
    """
    Calcule la somme de tous les arguments passés au script lors de son exécution.
    Affiche le résultat suivi d'une nouvelle ligne.
    """
    somme = 0
    
    for arg in sys.argv[1:]:
        try:
            nombre = int(arg)  
            somme += nombre
        except ValueError:

            pass
    print(somme)

if __name__ == "__main__":
    additionner_arguments()

