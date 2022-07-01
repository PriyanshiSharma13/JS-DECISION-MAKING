// Find Grades
// Your school has the following grading system based upon the marks(M) obtained by a student:
// If M <= 10, grade will be E
// If 11 >= M <= 20, grade will be D
// If 21 >= M <= 30, grade will be C
// If 31 >= M <= 40, grade will be B
// If 41 >= M <= 50, grade will be A
// Your friend will enter his marks out of 50, and your task is to print his grades using a switch statement.
// Note: You have to complete findGrades function. No need to take any input.

const findGrades = (M) => {
  switch(true){
    case (M <= 10) :
      return ' E ';
      
    case M >= 11 && M <= 20:
      return ' D ';
      
    case M >= 21 && M <= 30:
      return ' C ';
      
    case M >= 31 && M <= 40:
      return ' B ';
      
    case M >= 41 && M <= 50:
      return ' A ';
      
    default :
      return ' No result found ! ';
      
  }
};
console.log(findGrades(1));

// const findGrades = (M) => {
//     if(M <= 10){
//       return (`E`);
//     }
//     else if(11 >= M <= 20){
//       return (`D`);
//     }
//     else if(21 >= M <= 30){
//         return (`C`);
//     }
//     else if(31 >= M <= 40){
//         return (`B`);
//     }
//     else{
//       return (`A`);
//     }
// };
// console.log(findGrades(1));

// const findGrades = (M) => {
//     switch(M){
//       case (M <= 10) :
//         return ('E');
        
//       case (M >= 11 && M <= 20):
//         return ('D');
        
//       case (M >= 21 && M <= 30):
//         return ('C');
        
//       case (M >= 31 && M <= 40):
//         return ('B');
        
//       case (M >= 41 && M <= 50):
//         return ('A');
        
//       default :
//         return (' No result found !');
        
//     }
// };
// console.log(findGrades(1));