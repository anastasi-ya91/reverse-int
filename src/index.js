module.exports = function reverse (n) {
  let reversed = 0;
  let sign = Math.sign(n);
  n = Math.abs(n);
  
  while (n > 0) {
    reversed = reversed * 10 + n % 10;
    n = Math.floor(n / 10);
  }
  
  return sign * reversed; 
}
