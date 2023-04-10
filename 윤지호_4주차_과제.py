
# 1번 
def double(l):
    count=0
    for i in range(0,len(l),1):
        for j in range(0,len(l),1):
            if (l[j]/l[i]==2 and l[j]!=l[i]):
                count=count+1
    return count

# 2번
def pascal(a):
    if (a==1):
        l=[1]
        return l
    else:
        l=[1,1]
        l2=[1,1]
        while (len(l)<a):
            for i in range(1,len(l)):
                l2[i]=l[i-1]+l[i]
            l2.append(1)
            l=l2[:]
        return l
    
# 3번
def BeerRefrigerator(n):
    min = n**2
    result = []
    for i in range(1, n+1):
        if n % i == 0:
            for j in range(i,int(n/i)+1):
                if ((n/i)%j==0):
                    a=int((n/i)/j)
                    m=2*(i*j + j*a + a*i)
                    if (m<min):
                        min=m
                        result=[a, i, j]
    return result
print(BeerRefrigerator(12))
print(BeerRefrigerator(13))
print(BeerRefrigerator(24))
print(BeerRefrigerator(1000000))

# 4번
def matrixMul(a,b):
    y=len(a)
    x=len(b[0])
    z=len(a[0])
    n=[]
    for j in range(0,y):
        n.append([])
    for i in range(0,x):
        for j in range(0,y):
            n[j].append(0)
    for i in range(0,y):
        for j in range(0,x):
            for k in range(0,z):
                n[i][j]=n[i][j]+(a[i][k]*b[k][j])
    return n




#a=[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]]
#b=[[-1,2,-3],[4,-5,6],[-7,8,-9],[10,-11,12],[-13,14,-15]]
#print(matrixMul(a,b))













