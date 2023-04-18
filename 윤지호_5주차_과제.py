import matplotlib.pyplot as plt
import numpy as np
import math
import pandas as pd
def calculator(a):
    def calcCircleArea(r):
        return round((r**2)*math.pi,2)
    def calcLog(a,b):
        return round(math.log(b,a),2)
    def calcSin(x):
        return round(math.sin(x),2)
    def calcFactorial(x):
        return math.factorial(x)
    def calcCombinathion(a,b):
        return round(math.comb(a,b),2)
    
    if "원넓이:" in a:
        l=a.split()
        return calcCircleArea(float(l[1]))
    elif "로그:" in a:
        l=a.split()
        for i in range(1,3):
            if l[i]=="e":
                l[i]=math.e
            else :
                l[i]=float(l[i])
        return calcLog(l[1],l[2])
    elif "사인:" in a:
        l=a.split()
        return calcSin(float(l[1])) 
    elif "팩토리얼:" in a:
        l=a.split()
        return calcFactorial(int(l[1]))
    elif "조합:" in a:
        l=a.split()
        return calcCombinathion(int(l[1]),int(l[2]))
#print(calculator("원넓이: 10"))
#print(calculator("로그: e 10"))
#print(calculator("사인: 100"))
#print(calculator("팩토리얼: 5"))
#print(calculator("조합: 3 2"))