const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    } 
const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (l of verticalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
    return false;
};

const transpose = function(matrix) {
    // Put your solution here
    return matrix[0].map((col, i) => matrix.map(row => row[i]));
  };

module.exports = wordSearch


// const wordSearch = (letters, word) => { 
//     const horizontalJoin = letters.map(ls => ls.join(''));
//     for (l of horizontalJoin) {
//       if (l.includes(word)) {
//         return true;
//       }
//     }
    
//     const verticalJoin = transpose(letters).map(ls => ls.join(''));
//     for (l of verticalJoin) {
//       if (l.includes(word)) {
//         return true;
//       }
//     }
//     return false;
//   };
  
//   const transpose = function(matrix) {
//     const finalArray = [];
//     for (let i = 0; i < matrix[0].length; i++) {
//       let holderArray = [];
//       for (let j = 0; j < matrix.length; j++) {
//         holderArray.push(matrix[j][i]);
//       }
//       finalArray.push(holderArray);
//     }
//     return finalArray;
//   };
  
//   module.exports = wordSearch;

/*
const transpose = function(matrix) {
    // Put your solution here
    return matrix[0].map((col, i) => matrix.map(row => row[i]));
  };
  
  // Do not edit this function.
  const printMatrix = (matrix) => {
      for (const row of matrix) {
          for (const el of row) {
              process.stdout.write(el + " ");
          }
          process.stdout.write('\n')
      }
  }
  */