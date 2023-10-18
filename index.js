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

Your goal is to analyze and transform this data such that the output of your program is an array of objects each containing the following information, in the following format:
{
    // the ID of the learner for which this data has been collected
    "id": number,
    // the learner’s total, weighted average, in which assignments
    // with more points_possible should be counted for more
    // e.g. a learner with 50/100 on one assignment and 190/200 on another
    // would have a weighted average score of 240/300 = 80%.
    "avg": number,
    // each assignment should have a key with its ID,
    // and the value associated with it should be the percentage that
    // the learner scored on the assignment (submission.score / points_possible)
    <assignment_id>: number,
    // if an assignment is not yet due, it should not be included in either
    // the average or the keyed dictionary of scores
}

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
        for(const student of learners){
            //does this learner exist here already?
            if (LearnerSub.learner_id === student.id) {
                learnerExists = true; 
            } 
        } 
        if (learnerExists === false) {
            let uniqueStudent = {id:LearnerSub.learner_id, assignment_id:[]};
            learners.push(uniqueStudent);
        }
         
    }

    console.log(learners);
};


getLearnerData(CourseInfo,AssignmentGroup,[LearnerSubmissions]);