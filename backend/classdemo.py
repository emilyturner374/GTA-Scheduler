import datetime
class Course:
    def __init__(self, className, days, beginning, end):
        self.name = className
        self.day = days
        self.beg = beginning
        self.end = end
    def AssignGta(self, gtaName):
        self.gta = gtaName

class GTA:
    def __init__(self, gtaName):
        self.name = gtaName
    labs = []
    avail = {
                "Monday": "",
                "Tuesday": "",
                "Wednesday": "",
                "Thursday": "",
                "Friday": ""
            }
    def SetAvail(self, avail, day, time):
        self.avail[day] = time

###
courses = []
gtas = []
#demofile = open("sample.txt", "r")
#for line in demofile:
#    print(line, end="")
#    x = line.split()
#    temp = Course(x[0], x[1], x[2])
#    temp.assignGta(x[3])
#    courses.append(temp)
#print()


###
def AddCourse(lst):
    name = input("Name of class to add: ")
    days = input("Days meeting: ").split()
    start = input("Start time: ")
    end = input("End time: ")
    newClass = Course(name, days, start, end)
    lst.append(newClass)
    print("Class added!")

def AddGta(gtas):
    name = input("Name of the gta: ")
    newGta = GTA(name)
    availability = input("Day and time available: ").split()
    while(availability):
        day = availability[0]
        time = tuple(availability[1])
        newGta.SetAvail(newGta.avail, day, time)
        availability = input("Day and time available: ").split()

    print(newGta.avail.items())
    gtas.append(newGta)
    print("Gta added!")


###
def DeleteCourse(courses, clas):
    for x in courses:
        if  (x == clas):
            del clas
        break

def DeleteGta(gtas, ta):
    for x in gtas:
        if (x == ta):
            del ta
        break


###   
def ClassToSchedule():
    print("Begin adding classes, click(type) 'done' when finish")      #type in this case
    status = "not done"
    while(status != "done" and status != "no"):
        AddCourse(courses)
        status = input("Add more? ")

def GtaToSchedule():
    print("Begin adding Gtas, click(type) 'done' when finish")
    status = "not done"
    while(status != "done" and status != "no"):
        AddGta(gtas)
        status = input("Add more? ")


###
possible = {

            }
def CheckAvailability():
    for classes in courses:
        for gta in gtas:
            for days in classes.day:
                gtaStart = int(gta.avail[days][0])
                gtaEnd = int(gta.avail[days][1])
                classStart = int(classes.beg)
                classEnd = int(classes.end)




###
ClassToSchedule()
GtaToSchedule()
#CheckAvailability()
for test in courses:
    print("Class", test.name, "starts at", test.beg, "and ends at", test.end, "and is supervised by", test.gta)
    print()

