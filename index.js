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

        //find a way to list the average for homework submissions here.. .push it to the learner profile.
        //How can I list the average within the object?
        //What am I looking for? I'm looking for a way to put the scores for each individual assignment into an array. Two arrays. 
        // How many assignments are there for student id 125? 3. [assignment_id1.score, assignment_id2.score, assignment_id3.score] or [47, 150, 400]
        //How many assignments are there for student id 132? 2. [assignment_id1.score, assignment_id2.score] [39, 140]
        // const scoresLearnerID125 = [47,150,400]
        // const scoresLearnerID132 = [39,140]
        // "submission.score?" 

        }
         
    }

    return learners;
};

//figuring out how to include the averagemath for student submissions 
// const scoresArr132= [39, 140];
// let scoresStudentid132 = [];

// let total = 0
// for (let i = 0; i < scoresArr132.length; i++) {
//     total += LearnerSubmissions[i].LearnerSubmissions.score
//         scoresStudentid132.push(LearnerSubmissions[i].LearnerSubmissions.assignment_student)
// }
//total is 0 because we dont know what the sum of the scores is yet. we are going to take the sum or total and divide it by the score array length...



// console.log(scoresStudentid132);


// let scoresStudent125 = [];

console.log(getLearnerData(CourseInfo,AssignmentGroup,[LearnerSubmissions]));