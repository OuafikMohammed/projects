class Perssone :
    def __init__ (self, n, p, a, c) :
        self.nom = n
        self.prenom = p
        self.age = a 
        self.__cine = c
    
    def get_cine(self) :
        return self.__cine
    
    def set_cine(self,x) :
        self.__cine = x

    def del_cine(self):
        del self.__cine

    def __doc__(self) :
        return "This is Documentation class"
    
    def __str__ (self) :
        return f"Nom : {self.nom} {self.prenom} age : {self.age}"
    
    cine = property(get_cine,set_cine,del_cine,"This is Documentation cine")
    
if __name__ == "__main__" :
    # instance :
    firstPerssone = Perssone("mazoug","khalid","24","EA223262")
    print(firstPerssone)

    # normal get :
    print("Normal GET : ",firstPerssone.get_cine())

    # get with proprety method :
    print("GET with proprety method :",firstPerssone.cine)

    # Documentation :
    print(Perssone.__doc__)
    print(Perssone.cine.__doc__)


    firstPerssone.__cine = "111111"
    print(firstPerssone.__cine)
    print(firstPerssone.cine)