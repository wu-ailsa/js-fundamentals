/* OBJECTS*/
const CourseInfo = {
    "id": number,
    "name": string,
};

const AssignmentGroup = {
    "id": number,
    "name": string,
    // the ID of the course the assignment group belongs to
    "course_id": number,
    // the percentage weight of the entire assignment group
    "group_weight": number,
    "assignments": [AssignmentInfo],
};

const AssignmentInfo = {
    "id": number,
    "name": string,
    // the due date for the assignment
    "due_at": Date string,
    // the maximum points possible for the assignment
    "points_possible": number,
};

const Learner Submission = {
    "learner_id": number,
    "assignment_id": number,
    "submission": {
      "submitted_at": Date string,
      "score": number
    }
};

/* FUNCTIONS */

function getLearnerData(CourseInfo, AssignmentGroup, [LearnerSubmission]) {

};