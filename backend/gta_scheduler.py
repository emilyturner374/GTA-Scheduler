import pprint

courses =   {
                'CSCI1170': 
                {
                    'sections': 
                    {
                        1: {'timeSlot': (1,3), 'status': 'open', 'days': ['Monday', 'Wednesday']}, 
                        2: {'timeSlot': (2,5), 'status': 'open', 'days': ['Tuesday', 'Thursday']}
                    }
                },
                'CSCI2170':
                {
                    'sections': 
                    {
                        1: {'timeSlot': (2,4), 'status': 'open', 'days': ['Monday', 'Wednesday']},
                    }
                },
            } 


#students = {'joe': {'classesBeingTaught': ['CSCI1170-1'], 'takenTimeSlots': {'Monday-1': [(1,3)], 'Wednesday-1': [(1,3)]}}} # example layout
students =  {
                'joe': 
                {
                    'coursesBeingTaught': {}, 
                    'takenTimeSlots': {} 
                }, 
                'bob': 
                {
                    'coursesBeingTaught': {}, 
                    'takenTimeSlots': {} 
                }, 
                'john': 
                {
                    'coursesBeingTaught': {}, 
                    'takenTimeSlots': {} 
                }
            } 


# returns the how much overlap there is between two intervals (0 meaning there is no overlap)
def getOverlap(a, b):
    return max(0, min(a[1], b[1]) - max(a[0], b[0]))


# checks if the current time slot for the section of a course fits within the student's schedule
def isTimeSlotAvailable(student, course, section):
    if len(students[student]['takenTimeSlots']) == 0: # student is not teaching any courses
        return True
    
    # iterate through each day in the course's section, check if student is teaching on that day, and checks for any overlap in between the intervals in the student time slots for that day and the given time slot for the course's section
    for day in courses[course]['sections'][section]['days']:
        if day in students[student]['takenTimeSlots']:
            for timeSlot in students[student]['takenTimeSlots'][day]:
                if getOverlap(timeSlot, courses[course]['sections'][section]['timeSlot']) > 0:
                    return False
        
    return True # returns true if no overlaps were found


# generates the schedules for the GTAs
def schedule():
    for course in courses: # loop through each course
        for section in courses[course]['sections']: # get the section in the course
            if courses[course]['sections'][section]['status'] == 'open': # check if the status of the section within the course is open
                for student in students: # if it's open, loop through each student
                    if isTimeSlotAvailable(student, course, section): # checks if the time slot of that section is available compared to the time slots already taken by the student
                        courseTimeSlot = courses[course]['sections'][section]['timeSlot'] # stores the course's section's time slot

                        # adds the days and time slots of the course and its section to the student object
                        for day in courses[course]['sections'][section]['days']:
                            if day in students[student]['takenTimeSlots']:
                                students[student]['takenTimeSlots'][day].append(courseTimeSlot) # appends the section's time slot to the student's takenTimeSlots if the student is already teaching on that day
                            else:
                                students[student]['takenTimeSlots'][day] = [courseTimeSlot] # creates new entry and begins the time interval list

                            # adds the course, its section, and days and time slots into the 'coursesBeingTaught' attribute
                            if course+'-'+str(section) not in students[student]['coursesBeingTaught']:
                                students[student]['coursesBeingTaught'][course+'-'+str(section)] = {day: courseTimeSlot} # creates new dictionary to store day and time slot if the course-section did not exist prior
                            else:
                                students[student]['coursesBeingTaught'][course+'-'+str(section)][day] = courseTimeSlot # adds day and time slot to existing dictionary

                        courses[course]['sections'][section]['status'] = 'taken' # set the status to taken since student is now teaching at the time slot
                        break # breaks out of the students for loop after it assigns a student to the time slot for that particular section

                        
schedule()
pprint.pprint(students, sort_dicts=False)
