#!/usr/bin/python3
"""Rectangle generation module for Python project"""


class Rectangle:
    """Class defined for rectangle generation with width and height."""

    def __init__(self, width, height):
        """
        Initializes a new Rectangle instance.

        Args:
            width (int): The width of the rectangle.
            height (int): The height of the rectangle.
        """
    
        self.width = width
        self.height = height

    def area(self):
        """
        Calculates and returns the area of the rectangle.
        """
        return self.width * self.height

    def perimeter(self):
        """
        Calculates and returns the perimeter of the rectangle.
        """
        return 2 * (self.width + self.height)


if __name__ == "__main__":
    # Création d'objets (instances) de la classe Rectangle
    my_rectangle = Rectangle(width=10, height=5)
    your_rectangle = Rectangle(7, 3)

    print(f"Mon rectangle: Largeur={my_rectangle.width}, Hauteur={my_rectangle.height}")
    print(f"Votre rectangle: Largeur={your_rectangle.width}, Hauteur={your_rectangle.height}")


    print(f"Aire de mon rectangle: {my_rectangle.area()}")
    print(f"Périmètre de votre rectangle: {your_rectangle.perimeter()}")


    my_rectangle.width = 12
    print(f"Nouvelle aire de mon rectangle: {my_rectangle.area()}")i
