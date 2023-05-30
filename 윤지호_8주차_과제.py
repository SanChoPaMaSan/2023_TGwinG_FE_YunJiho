src = [5,4,3,7,8,9,1,6]
def bubble_sort(src):
    count=0
    src2=[]
    for i in src:
        count+=1
        src2.append(i)
    for i in range(0,count):
        if src2[i]<src2[i+1]:
            src2[i],
