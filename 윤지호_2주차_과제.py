# 1번
def sum(a,b):
    return a+b

# 2번
def sub(a,b):
    return a-b

# 3번
def mul(a,b):
    return a*b

# 4번
def div(a,b):
    return a/b

# 5번
def distance (x1,y1,x2,y2):
    return ((((x2-x1)**2)+((y2-y1)**2))**(1/2))

# 6번
def title():
    lyrics = "Beside you"
    return lyrics[0:10]

# 7번
def reverseStr(string):
    return string[::-1]

# 8번
def introduce():
    a,b,c=str(input('이름을 입력하세요 : ')), str(input("취미를 입력하세요 : ")), str(input("재학 중인 학교를 입력하세요 : "))
    while (1) :
        d=str(input("생일을 입력하세요 : "))
        if (int(d[2:4])<=12 and  int(d[4:6])<=31 and len(d)==6) :
            break
        else:
            print("YYMMDD형식으로 다시 시도해 주세요.")
    print("제 이름은 %s입니다. 취미는 %s입니다. 저는 %s를 다니고 있습니다. 제 생일은 %s월 %s일 입니다."%(a,b,c,d[2:4],d[4:6]))

# 9번
def calc() :
    a,b=str(input("첫 번째 수를 입력하세요 : ")), str(input("두 번째 수를 입력하세요 : "))
    a,b=int(a),int(b)
    print("두 수의 합 : %d\n두 수의 차 : %d\n두 수의 곱 : %d\n두 수의 몫: %d"%(a+b,a-b,a*b,a/b))