# 1번
def grade(a) :
        if (a>100  or a<0):
                print("다시 입력해 주세요")
        elif (a>=90):
                return "A"
        elif (a>=80):
                return "B"
        elif (a>=70):
                return "C"
        elif (a>=60):
                return "D"
        else :
                return "F"
        
# 2번
def quadrant(a,b):
        if (a==0 or b==0):
                print("다시 입력해 주세요.")
        elif (a>0 and b>0):
                c=1
        elif (a>0 and b<0):
                c=4
        elif (a<0 and b>0):
                c=2
        else:
                c=3
        return "제 %d사분면"%(c)

# 3번
def leapYear(a):
        if ((a%4 ==0 and a%100!=0) or a%400==0):
                return "윤년입니다."
        else :
                return "윤년이 아닙니다."
        
# 4번
def dice(a,b,c):
        if (a==b and b==c):
                return 10000+(a*1000)
        elif (a==b or b==c or c==a):
                return 1000+(a*100)
        else:
                if(a>=b and a>=c):
                        return a*100
                elif(b>=a and b>=c):
                        return b*100
                else:
                        return c*100
                
# 5번
def alarm(a):
        if (a<10 or (a<100 and a//45==0)):
                b,c=23,15+a
        elif (a<100):
                b,c=0,a-45
        elif ((a%100)//45==0):
                b,c=(a//100)-1,(a%100)+15
        else:
                b,c=(a//100),(a%100)-45
        return "%d시 %d분"%(b,c)

