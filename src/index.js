
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!Boolean(matrix)) return [];
  let answer = [];
  for (let i = 0; i < matrix.length; i++){
    if(i % 2 === 0){
      answer.push(...matrix[i]);
    } else {
      answer.push(...matrix[i].reverse())
    }
  }
  return answer;
}
