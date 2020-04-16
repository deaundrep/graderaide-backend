/******************
 * YOUR CODE HERE *
 ******************/
const Grade = (assignment, score) =>{
  return{
    assignment: assignment,
    score: score,
  }

}

const Term = (hours) =>{
  return{
    hours: hours,
    grades: [],

    addGrade: function(func1, func2){
      this.grades.push(Grade(func1,func2))

    }
  }

}


const Course = (name) =>{
return{
  name: name,
  terms: [],

  addTerm: function(func1,func2){
    this.terms.push(Term(func1,func2))
  }
}
}

const Student = (name, course, term = 1) =>{
  return{
    name: name,
    course: course,
    term: term,
    courses: [],

    addCourse: function(func1,func2){
      this.courses.push(Course(func1,func2));
    }
  }
}

getAverage: function(name,index){
  

}






/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof Grade === 'undefined') {
  Grade = undefined;
}

if (typeof Term === 'undefined') {
  Term = undefined;
}

if (typeof Course === 'undefined') {
  Course = undefined;
}

if (typeof Student === 'undefined') {
  Student = undefined;
}


module.exports = {
  Grade,
  Term,
  Course,
  Student,
}
