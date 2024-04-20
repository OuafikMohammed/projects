class Rectangle:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def surface(self):
        return self.a * self.b


rect = Rectangle(5,2)
print("Surface du rectangle :", rect.surface())