/* OBJECTS*/
// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];




/* What you must do:
    // the learner scored on the assignment (submission.score / points_possible)
    <assignment_id>: number,
*/  


/* FUNCTIONS */

function getLearnerData(CourseInfo, AssignmentGroupz, [LearnerSubmission]) {

    if (CourseInfo.id !== AssignmentGroupz.course_id) {
        throw new Error("The Course ID doesn't match the Assignment Group ID.");
    }

    const learners = [];
    for (const LearnerSub of LearnerSubmission) {
        // console.log(LearnerSub.learner_id); //This shows me a tally of all the learnerSubmission ids 
        
        //precedence, assumption:
        let learnerExists = false;   
        //if there is at least one student then you need to compare new assignments to existing studentobjects list, you must run the learner submission through this code directly below...
        for(const student of learners){
            //does this learner exist here already?
            if (LearnerSub.learner_id === student.id) {
                learnerExists = true; 
                student.assignment_id.push(LearnerSub.assignment_id);
                break; //if the student ids match you may exit here
            } 
        } 
        if (learnerExists === false) {
            let uniqueStudent = {id:LearnerSub.learner_id, assignment_id:[LearnerSub.assignment_id]};
            learners.push(uniqueStudent);


        }
         
    }
    // forEveryStudent 
    
    for (let step = 0; step < learners.length; step++) {
      learners[step].avg = findStudentAverage (learners[step],AssignmentGroupz.assignments,LearnerSubmission)
    }
    //
    return learners;
};

// function to find average for student 125
const findStudentAverage = function (student, assignmentList,LearnerSubmission) {
  let denominator = 0;
   let quotient = 0;

  const dueDates = [];

  
  for (let assignmentID of student.assignment_id) {
    for (let homework of assignmentList) {
      if (homework.id === assignmentID) {
        denominator += homework.points_possible;
        dueDates.push({
          id:homework.id, dueDate:homework.due_at
        })

      }
    }
  }
  for (const LearnerSub of LearnerSubmission) {
    let foundDate = null; 
    for (const dueDateCheck of dueDates) {
      if (dueDateCheck.id === LearnerSub.assignment_id) {
        foundDate === dueDateCheck.dueDate;
      }
    }
    if (LearnerSub.learner_id === student.id) {
      if (foundDate > LearnerSub.submitted_at) {
        //if on time
      quotient += LearnerSub.submission.score;
    } else {
      quotient += (LearnerSub.submission.score*0.9);
    }
  }
   } 


  console.log(quotient, denominator);
  if (denominator === 0) {
    return 0; 
  }
  return quotient / denominator; 


};

// function to find average for student 132 

console.log(getLearnerData(CourseInfo,AssignmentGroup,[LearnerSubmissions]));