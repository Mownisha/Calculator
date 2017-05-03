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

$(document).ready(function() {

  $("form#add").submit(function(event) {
    event.preventDefault();
    var num1=parseInt($("#add1").val());
    var num2=parseInt($("#add2").val());
    var result= add(num1,num2);
    $("#output1").text(result);
  });

  $("form#sub").submit(function(event) {
    event.preventDefault();
    var num1=parseInt($("#sub1").val());
    var num2=parseInt($("#sub2").val());
    var result= sub(num1,num2);
    $("#output2").text(result);
  });

  $("form#mul").submit(function(event) {
    event.preventDefault();
    var num1=parseInt($("#mul1").val());
    var num2=parseInt($("#mul2").val());
    var result= mul(num1,num2);
    $("#output3").text(result);
  });

  $("form#div").submit(function(event) {
    event.preventDefault();
    var num1=parseInt($("#div1").val());
    var num2=parseInt($("#div2").val());
    var result= div(num1,num2);
    $("#output4").text(result);
  });

  $("form#rem").submit(function(event) {
    event.preventDefault();
    var num1=parseInt($("#rem1").val());
    var num2=parseInt($("#rem2").val());
    var result= rem(num1,num2);
    $("#output5").text(result);
  });
});
