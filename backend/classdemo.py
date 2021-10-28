class Course:
    def __init__(self, className, beginning, end):
        self.name = className
        self.beg = beginning
        self.end = end
    def assignGta(self, gtaName):
        self.gta = gtaName

#class GTA:
#    def __init__(self, gtaName):
#        self.name = gtaName

courses = []
demofile = open("sample.txt", "r")
for line in demofile:
    print(line, end="")
    x = line.split()
    temp = Course(x[0], x[1], x[2])
    temp.assignGta(x[3])
    courses.append(temp)

print()
for test in courses:
    print("Class", test.name, "starts at", test.beg, "and ends at", test.end, "and is supervised by", test.gta)
    print()
def AddCourse(lst):
    name = input("Name of class to add: ")
    start = input("Start time: ")
    end = input("end time: ")
    gtaname = input("gta in charge: ")
    newClass = Course(name, start, end)
    newClass.assignGta(gtaname)
    lst.append(newClass)

AddCourse(courses)
print("\nAdded", courses[-1].name, "starting at", courses[-1].beg, "ending at", courses[-1].end, "and supervised by", courses[-1].gta)
    

