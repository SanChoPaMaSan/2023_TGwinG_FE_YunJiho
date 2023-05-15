#with open("test2.txt","r") as f:
#    sum=0
#    count=0
#    while(True):
#        line = f.readline()
#        if not line:break
#        else:
#            count+=1
#            sum+=int(line)
#    data=sum/count
#with open("test2.txt","a") as f:
#    f.write(data)
    
# 1번
def relativeComp(a,b):
    L=[]
    l=[]
    for i in a:
        if i in b:
            l.append(i)
        else:
            L.append(i)
    L.sort()
    return L

# 2번
def alphabetFreq(a):
    l={}
    L=[]
    count=0
    for i in a.upper():
        l[i]=0
    for i in a.upper():
        l[i]+=1
    for i in l:
        L.append(l[i])
    L.sort(reverse=True)
    if L[0]==L[1]:
        return "?"
    else:
        for i in l:
            if l[i]==L[0]:
                return i

