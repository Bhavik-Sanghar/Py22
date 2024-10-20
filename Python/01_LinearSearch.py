arr1 = [1,2,3,4,5,6,8,8,2,4,5]

def linearsearch(inp,target):
    for i in range(len(inp)):
        if inp[i] == target :
            return i             
        
print(linearsearch(arr1,4))

