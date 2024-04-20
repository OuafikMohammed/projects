smallest = None

for the_num in [9 ,41 ,12, 3 ,74, 15]:
    if smallest is None:
        smallest = the_num
    elif smallest > the_num :
        smallest = the_num
    print(smallest , the_num)
print("the smallest number is:" , smallest )
