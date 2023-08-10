
function toReadable(n) {
const special = ["zero","one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const deca = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const tens = Math.floor(n/10);
const hun = Math.floor(n/100);
  if (n < 20) return special[n];
  if (n<100 && n%10 === 0) return deca[tens-2];
  if ((n%100)===0) return special[hun] + " hundred";
  if (n>100 && (n%100)<20) return special[hun] + " hundred " + special[n%100];
  if (n>100 && n%10===0) return special[hun] + " hundred " +deca[Math.floor(n%100/10)-2];
  return special[hun] + " hundred " +deca[Math.floor(n%100/10)-2]+ " " + special[n%10];
};