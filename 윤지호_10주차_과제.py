class Subject():
    def __init__(self,score,subject_name,max_score):
        self.score = None
        self.subject_name = None
        self.max_score = None
    def get_subject_name(self):
        return self.subject_name
    def set_score(self,score):
        self.score = score
    def get_score(self):
        return self.score 
    def get_max_score(self):
        return self.max_score
class Korean(Subject):
    def __init__(self):
        self.subject_name="국어"
        self.max_score=100
class Math(Subject):
    def __init__(self):
        self.subject_name="수학"
        self.max_score=100
class History(Subject):
    def __init__(self):
        self.subject_name="역사"
        self.max_score=100
class Student():
    def __init__(self,name):
        self.name = name
        self.kor = Korean()
        self.math = Math()
        self.his = History()
        self.subjects = [self.kor,self.math,self.his]
    def get_name(self):
        return self.name
    def make_sum(self):
        return self.kor.score+self.math.score+self.his.score
    def print(self):
         print("==== Student %s ===="%self.name)
         print("국어 : "+str(self.kor.score)+" / 100")
         print("수학 : "+str(self.math.score)+" / 100")
         print("역사 : "+str(self.his.score)+" / 50")
n=int(input("How many students: "))
students=[]
for i in range(n): 
    name=input("Name of Students: ")
    student=Student(name)
    for subject in student.subjects:
        score = int(input("Score of %s:"%subject.get_subject_name()))
        subject.set_score(score)
    print()
    student.print()
    print()
    students.append(student)
print("====Rank====")
