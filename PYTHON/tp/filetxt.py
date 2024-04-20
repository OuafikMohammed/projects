########################  WRITING IN FILE #####################
######   METHOD 1
# f = open("file.txt" , "w") 
# f.write("Med")
# f.write("Ouafik")
# f.close()
######   METHOD 2
# with open("file.txt", "w")as file :
#     file.write("Ouafik Mohammed\n")
#     file.write("18\n")
########################  READING IN FILE #####################
######## METHOD 1
# file = open("file.txt" , "r")
# print(file.read())
# file.close()
######## METHOD 2 
# with open("file.txt", "r")as f :
#     print(f.read())
######## METHOD 3 READ n VALUES 
# file  = open("file.txt", "r")
# print(file.read(8))
# file.close()
######## METHOD 4 READ FIRST LINE
# file = open("file.txt","r")
# print(file.readline())