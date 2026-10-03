// Q(1)..Password Strength Checker
function checkPassword(password){
    
    let capitalLetters = false;
    let smallLetters = false;
    let number=false;
    for ( let i=0; i<password.length; i++){
        let char=password[i];
         if (char>='A' && char<='Z'){
            capitalLetters=true;
        }
        if (char>='a' && char<='z'){
            smallLetters=true;
        }
        if(char>=0 && char<=9){
            number=true;
        }
    }
    if(capitalLetters && smallLetters && number && password.length>=8){
        return "Strong Password";
    }
    else{
        return "Weak Password";
    }
}
console.log(checkPassword("mjvnb8")); 

//Q(2)..Cinema Ticket Billing System 

let customer="nooR";
let number=2;
let price=400;
let custtype="student";

let formatname=customer.charAt(0).toUpperCase()+customer.slice(1).toLowerCase();

let totalprice=0;
for(let i=1; i<=number;i++){
    totalprice=totalprice+price;
}


const calculateDiscount=(amount,percentage)=>{
    return amount*percentage/100;
}

let discount=0;
if(custtype.toLowerCase()==="student" &&number>=3){
    discount=25;
}
else if(custtype.toLowerCase()==="student" && number<=2){
    discount=15;
}
else if(custtype.toLowerCase()==="senior citizen" && number>=3){
    discount=30;
}
else if(custtype.toLowerCase()==="senior citizen" && number<=2){
    discount=20;
}
else if( number>=5){
    discount=10;
}

let discountAmount=calculateDiscount(totalprice,discount);
let finalAmount=totalprice-discountAmount;

console.log("Customer Name: " + formatname);
console.log("Number of Tickets: " + number);
console.log("Total Price: " + totalprice);
console.log("Customer Type: " + custtype);
console.log("Discount: " + discount + "%");
console.log("Final Amount: " + finalAmount);

//Q(3)..Game Score Analyzer
function analyzeScore(score){
        let scorestring=score.toString();
        let numberofdigits=scorestring.length;
        let sumofdigits=0;
        for(let i=0; i<numberofdigits;i++){
            sumofdigits=sumofdigits+Number(scorestring[i]);
        }
        let sqauertoot=Math.sqrt(score).toFixed(2);
        console.log("Score: " + score);
        console.log("Number of Digits: " + numberofdigits);
        console.log("Sum of Digits: " + sumofdigits);
        console.log("Square Root: " + sqauertoot);

        if(score===100){
            return "Perfect Score";
        }
        else if(score>=80 && score<=99){
          return "Excellent Score";
        }
        else if (score >= 50 && score <= 79) {
        return "Good Score";
    } 
    else {
        return "Needs Improvement";
    } 
}
console.log(analyzeScore(65));

//Q(4)..Temperature Checker
function checkTemperature(temp){
    console.log("Temperature: " + temp);
    let checkcount=0;
   for (let i=1 ; i<=5; i++){
    checkcount++;
   }
   console.log("Temperature Check Count: " + checkcount); 
   if (temp > 30) {
    return "Hot";
   }
   else if (temp< 30){
    return "Cold";
   }
   else{
    return "Normal";
   }
}
console.log( "temperature : " + checkTemperature(25));

//Q(5)..Student Grade Calculator
function calculateResult(marks1, marks2, marks3) {
    let total = marks1 + marks2 + marks3;
    let percentage = (total / 300) * 100;
    console.log("Total Marks: " + total);
    console.log("Percentage: " + percentage.toFixed(2) + "%");
    if (percentage >= 80) {
        return "A Grade";
    }
    else if (percentage >= 70) {
        return "B Grade";
    }
    else if (percentage >= 60) {
        return "C Grade";
    }
    else {
        return "Fail";
    }
}
console.log(calculateResult(80, 71, 80));