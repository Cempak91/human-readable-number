module.exports = function toReadable (number) {
    const special = ["zero","one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const deca = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const tens = Math.floor(number/10);
    const hun = Math.floor(number/100);
      if (number < 20) return special[number];
      if (number<100 && number%10 === 0) return deca[tens-2];
      if (number<100) return deca[tens-2]+" " + special[number%10];
      if ((number%100)===0) return special[hun] + " hundred";
      if (number>100 && (number%100)<20) return special[hun] + " hundred " + special[number%100];
      if (number>100 && number%10===0) return special[hun] + " hundred " +deca[Math.floor(number%100/10)-2];
      return special[hun] + " hundred " + deca[Math.floor(number%100/10)-2]+ " " + special[number%10];
};
