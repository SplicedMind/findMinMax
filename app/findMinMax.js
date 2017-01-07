module.exports = {
 
 findMinMax: function(arr) {
   var minMax = [];
  // Check if the argument is an array
   if (arr instanceof Array) 
      {
         //Initialize min and max to the first array element
         var min = arr[0];
         var max = arr[0];
         //Initialize iterator to 0
         var iterator = 0;
         // Iteration of the array
         while(iterator < arr.length)
         {
            //Check if the current element is a Number
            if(typeof(arr[iterator]) == 'number' )
            {
               //Check if current element is less than min and assign current element to min if true
               if(min > arr[iterator])
               {
                  min = arr[iterator];
               }
               //Check if the current element is greater than max and assign current element to max if true
               if (max < arr[iterator])
               {
                  max = arr[iterator];
               }

               iterator += 1;          
            }
            //Returns `invalid argument if current element is not a number
            else
            {
               return 'invalid argument';
            }            
         }
         //Checks if min equals max 
         if(min === max)
         {
            minMax[0] = min;
         }
         //Execute if min does not equal max
         else
         {
            minMax[0] = min;
            minMax[1] = max;
         }
         return minMax;
      }
      //Returns `invalid argument if argument is not an array
   else
      {
        return 'invalid argument';
      }
 }
  
}