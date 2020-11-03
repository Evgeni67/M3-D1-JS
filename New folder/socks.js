/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sumOfTwo = (a,b) => {
    let sum = a + b;
    if(a === b){
        sum *= 3
        return sum
    }else{
        return sum
    }
}
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const sumOfTwo2 = (a,b) => {
    if(a === 50){
        return true
    }else if(b === 50){
        return true
    }else if(a+b === 50){
        return true
    }
}
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const removeAt = (index, text) => {
text.splice(index,1)
return text
}

/*
4)
 Create a function to find the largest of three given integers.
*/
const findBiggestNumOfThree = (a,b,c) => {
    if(a>b){
        if(a>c){
            return a
        }else{
            return c
        }
    }else if(b>a)
    {
          if(b>c){
              return b
          }else{
              return c
          }
    }
}
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const checkRange = (a,b) => {
    let messageToDisplay
    if(a >= 40 && a <=60){
        if(b >= 40 && b <=60){
            messageToDisplay = "Both numbers are in range 40-60"
        }
    }
    if(a >= 70 && a <=100){
        if(b >= 70 && b <=100){
            messageToDisplay = "Both numbers are in range 70-100"
        }
    }
}
/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const displayCity = (cityName) => {
    if(cityName[0] === "L" && cityName[1] === "o" &&cityName[2] === "s"){
        return cityName
    }else if(cityName[0] === "N" && cityName[1] === "e" &&cityName[2] === "w"){
        return cityName
    }else {
        return new blank
    }
}
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
const sumOfNums = (ar) => {
let first = ar[0]
let second = ar[1]
let third = ar[2]
let sum = first +second +third
return sum
}
/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const testContain = (ar) => {
if(ar[0] === 1 || arr[0] === 3)
{
return true
}else if(ar[1] === 1 || arr[1] === 3){
    return true
}
}
/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
const testContain = (ar) => {
if(ar[0] === 1 || arr[0] === 3)
{
return false
}else if(ar[1] === 1 || arr[1] === 3){
    return false
}
return true
}
/*
11)
Create a function to find the longest string from a given array of strings.
*/

const findLongest = (arr) => {
let longestArr;
let length
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let currentLenght = element.length
    if(currentLenght > length)
    {
        longestArr = element
    }
}
    return longestArr
}



/*
12)
Create a function to find the types of a given angle.
Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
    */
const typeOfAngel = (degrees) => {
    if(degrees < 90){
        return "acute"
    }else if(degrees === 90){
        return "right"
    }else if(degrees < 180){
        return "btuse"
    }else if(degrees === 180){
        return "straight"
    }
}


    /*
13)
Create a function to find the index of the greatest element of a given array of integers
*/
const findIndexOfGreates = (ar) => {
    let greatest = Integer.MAX_VALUE + 1
    let indexOfGreatest = 0;
for (let index = 0; index < ar.length; index++) {
    const element = ar[index];
    if(element > greatest){
        greatest = element
        indexOfGreatest = index
    }
}
return indexOfGreatest
}

/*
14)
Create a function to get the largest even number from an array of integers.
*/
const getLargestEvenNum = (arr) => {
    let greatest = Integer.MAX_VALUE + 1
    for (let index = 0; index < ar.length; index++) {
        const element = ar[index];
        if(element / 2 === 0){
         if(element > greatest){
             greatest = element
         }
        }
    }
    return element
}


/*
15)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const sumOfTwo2 = (a,b) => {
    if(a === 50){
        return true
    }else if(b === 50){
        return true
    }else if(a+b === 50){
        return true
    }
}

/*
16)
Create a function to check from two given integers, whether one is positive and another one is negative.
*/
const onePlusOneMiuns = (a,b) => {
    if(a < 0 && b >0)
    {
        return true
    }else if(a > 0 && b < 0){
return true
    }
}

/*
17)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/
const upFirstThree = (str) => {
    for (let i = 0; i < 3; i++) {
        str[i].toUpperCase();
    }
    return str
}

/*
18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
*/
const sumOfTwo = (a,b) => {
    let sum = a+b
    if(sum >= 50 && sum <= 80){
        return 65
    }else{
        return 80
    }
}

/*




19)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/
