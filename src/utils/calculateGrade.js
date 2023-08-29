const calculateGrade = score => {

  if ( score === null || score === undefined || typeof score !== 'number' ) {
    return null;
  }

  const percentage = parseInt(score);

  let grade = null;
  let remarks = null;

  if (percentage >= 97) {
    grade = 'A+';
  } else if (percentage >= 93 && percentage <= 96) {
    grade = 'A';
  } else if (percentage >= 90 && percentage <= 92) {
    grade = 'A-';
  } else if (percentage >= 87 && percentage <= 89) {
    grade = 'B+';
  } else if (percentage >= 83 && percentage <= 86) {
    grade = 'B';
  } else if (percentage >= 80 && percentage <= 82) {
    grade = 'B-';
  } else if (percentage >= 77 && percentage <= 79) {
    grade = 'C+';
  } else if (percentage >= 73 && percentage <= 76) {
    grade = 'C';
  } else if (percentage >= 70 && percentage <= 72) {
    grade = 'C-';
  } else if (percentage >= 67 && percentage <= 69) {
    grade = 'D+';
  } else if (percentage >= 63 && percentage <= 66) {
    grade = 'D';
  } else if (percentage >= 60 && percentage <= 62) {
    grade = 'D-';
  } else if (percentage < 60) {
    grade = 'F';
  }

  if (score >= 60) {
    remarks = 'Congratulations, YOU PASSED!';
  } else {
    remarks = 'Sorry, YOU FAILED!';
  }

  return {
    grade,
    remarks
  };
};

export default calculateGrade;
