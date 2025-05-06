#!/usr/bin/python3
import random
number = random.randint(-10, 10)

if number > 0:
    print("positif")
elif number == 0:
    print("null")
else:
    print("négatif")
