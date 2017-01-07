module.exports = {
 
 computeAverage: function(num1,num2,num3) {
   var average = 0;
   average = ((num1 + num2 + num3)/3);
   return average;
 },
 
 computeFactorial: function(num) {
   var factorial = 1;
   var i = 1;
   while (i <= num)
   {
   	factorial = factorial * i;
   	i = i + 1;
   }
   return factorial; 
 },

 convertTempCtoF: function(cTemp) {
   var fTemp = 0;
   fTemp = (cTemp * (9/5) + 32);
   return fTemp; 
 },

 convertTempFtoC: function(fTemp) {
   var cTemp = 0;
   cTemp = (fTemp - 32)/(9/5);
   return cTemp; 
 }

}