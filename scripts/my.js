//String functions

var myText="Javascript";
document.write("<br/>"+myText.length);
document.write("<br/>"+myText.charAt(4));
document.write("<br/>"+myText.indexOf('v'));
document.write("<br/>"+myText.substr(0,4));
document.write("<br/>"+myText.toUpperCase(myText));
document.write("<br/>"+myText.toLowerCase(myText));


var da = new Date();
var year = da.getFullYear();
var dayt =da.getDay();

/*
    if( day == 0) day= "Sunday";
    else if(day == 1) day = "Monday";
    else if(day == 2) day = "Tuesday";
    else if(day ==3) day = "Wednesday" ;
    else if(day == 4) day = "Thursday";
    else if(day == 5) day = "Friday";
    else day = "Saturday";
 */
   var days = new Array("Sunday" , "Monday" , "Tuesday", "Wednesday" , "Thursday" , "Friday" , "Saturday");
   day = days[dayt];

    
var tdate = da.getDate();
var cmonth = da.getMonth()+1;
   switch(cmonth)
      {
          case 1:
              { cmonth="January"; break;}
          case 2:
                { cmonth="Feburary"; break;}   
          case 9:
                { cmonth="September"; break;} 
          default:{ cmonth="December"; break; }
      }
document.writeln("<br/>Today is: "+ day + ", "+ tdate+" "+cmonth +" "+ year);

var name = "Ram";
let age = 21;
college = "The British College";
document.writeln("<br>" + name + " is "+ age + "<b>Years</b> old and he goes to <b>" + college+ "</b>");

num1 = 10;
num2 = 30;
sum = num1 + num2;
document.writeln("<br> The sum of " +num1 + " and "+ num2+ " is  "+sum);

//dialogue boxes in javascript
//prompt used for taking input from the user
/*
var name = prompt("Enter your name? ");
document.write("Welcome, "+ name);
*/

//example for adding two numbers from users input
//parseInt  or parseFloat
/*
var num1 = parseInt(prompt("Entter the First NUmber? "));
var num2 = parseInt(prompt("Enter the SEcond NUmber? "));
var sum = num1 + num2;
document.writeln ("THe sum is "+sum);
*/

//using of confirm dialogue box
//return true or false

function closeMe(){
    clo=confirm("Are you sure you want to close this Webpage?")
   if(clo==true){
       window.close();
   }
   else{

   } 
}

function mulTable() {
       var num =  parseInt(prompt("Enter the Number "))

       /*
       for(i = 1; i <= 10; i++ )
       {
           var mul = i * num ;
           document.write("<br>" + num + " x " + i + " = " + mul);
       }
       */
       i=1;
       while(i<=10)
       {
        var mul = i * num ;
        document.write("<br>" + num + " x " + i + " = " + mul);
        i++;
       }
}

/*
1
2 2 
3 3 3
4 4 4 4
5 5 5 5 5
================
*
$ $
* * *
$ $ $ $
* * * * *

*/
document.write("<br/>")
document.write("<br/>")
for ( i = 1; i <= 5; i++ ){
  for( j = 1; j <= i; j++ ) {
      document.write("  " + i + "  ")
  }
    document.write("<br/>");
}

//function with parameter and no return type;
function add(x, y){
    sum=x + y;
    document.write("<br/>The sum of "+ x + " and " + y +" is: "+sum);
}


function sub(x, y)
{
    sub= x - y;
    return sub;
}

var a="5";
var b=5;
sum=eval(a)+eval(b);
document.write("<br><h1>The sum is "+sum + "</h1>");


//dom manipulation
document.getElementById("error").innerHTML="<h1>Hello I am error<h1>";

var myImages = new Array("images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg" , "images/6.jpg");

var ranNumber =Math.floor(Math.random()* myImages.length);
document.getElementById("myImages").src=myImages[ranNumber];

function admissionOpen(){
    //alert("Admission Open for Sept Intake");
    
}

function validateForm(){
   // alert("Form Submitted");
   //Taking User INpouts Value
   var uname = document.login.user.value;
   var upass = document.login.pass.value;
   if(uname == "" && upass == "") {
       document.getElementById("error").innerHTML = "Username and password is required ";
       document.login.user.focus();
       return false;
   }
    return true;
}

	function random(number) {
	       return Math.floor(Math.random() * (number+1));
	}
	function changeBgColor() {
	      var rCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ') ';
	      document.body.style.backgroundColor = rCol;
    }

    function red(){
    document.body.style.backgroundColor = "#ff0000";
    }

    //color:rgb(255,25,78)




