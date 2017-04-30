var add=function(num1,num2){
  return num1+num2;
};

var sub=function(num1,num2){
  return num1-num2;
};

var mul=function(num1,num2)
{
  return num1*num2;
};

var div=function(num1,num2)
{
  return num1/num2;
};

var rem=function(num1,num2)
{
  return num1%num2;
};

var num1=parseInt(prompt("Enter a number: "));
var num2=parseInt(prompt("Enter another number: "));

var r1=(add(num1,num2));
alert("The result of addition is "+r1);
var r2=(sub(num1,num2));
alert("The result of subtraction is "+r2);
var r3=(mul(num1,num2));
alert("The result of multiplication is "+r3);
var r4=(div(num1,num2));
alert("The result of division is "+r4);
var r5=(rem(num1,num2));
alert("The remainder of division is "+r5);
